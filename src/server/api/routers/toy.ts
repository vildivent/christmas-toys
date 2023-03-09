import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

const zodCreateInput = {
  title: z.string().min(1),
  type: z.string().min(1),
  dates: z.string().optional().nullable(),
  material: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  photos: z.array(
    z.object({
      title: z.string().min(1),
      url: z.string().min(1), //z.url()
      aspect_ratio: z.number().positive(),
    })
  ),

  box: z.number().positive().optional().nullable(),
  size: z.number().optional().nullable(),
  description: z.string().optional().nullable(),
};

const zodGetInput = {
  q: z.string().optional(),
  page: z.number().optional(),
  id: z.string().optional(),
  type: z.string().optional(),
  dates: z.string().optional(),
  box: z.number().optional(),
};

export const toyRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object(zodCreateInput))
    .mutation(async ({ ctx, input }) => {
      const newToy = await ctx.prisma.toy.create({
        data: {
          title: input.title,
          type: input.type,
          dates: input.dates,
          material: input.material,
          category: input.category,
          photos: {
            create: input.photos,
          },
          box: input.box,
          description: input.description,
          size: input.size,
        },
        include: {
          photos: true,
        },
      });

      return newToy;
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.toy.findMany({ include: { photos: true } });
  }),
  get: protectedProcedure
    .input(z.object(zodGetInput))
    .query(async ({ ctx, input }) => {
      if (input.id)
        return await ctx.prisma.toy.findUnique({
          where: { id: input.id },
          include: {
            photos: true,
          },
        });

      const sample = await ctx.prisma.toy.findMany({
        where: { box: input.box, dates: input.dates, type: input.type },
        include: {
          photos: true,
        },
      });

      return sample;
    }),

  update: protectedProcedure
    .input(z.object({ ...zodCreateInput, id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.toy.update({
        where: { id: input.id },
        data: {
          title: input.title,
          type: input.type,
          dates: input.dates,
          material: input.material,
          category: input.category,
          // photos: input.photos,
          box: input.box,
          description: input.description,
          size: input.size,
        },
        include: {
          photos: true,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.image.deleteMany({ where: { toyId: input } });
        return await ctx.prisma.toy.delete({ where: { id: input } });
      } catch (error) {
        console.error(error);
      }
    }),
});
