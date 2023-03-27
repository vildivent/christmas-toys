import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { deleteFile } from "features/CardMenu/api";

const Zphotos = z.array(
  z.object({
    id: z.string().optional(),
    title: z.string().min(1),
    url: z.string().url().min(1),
    aspect_ratio: z.number().positive(),
    isMain: z.boolean(),
  })
);

const input = {
  title: z.string().min(1),
  type: z.string().min(1),
  dates: z.string().nullish(),
  material: z.string().nullish(),
  category: z.string().nullish(),
  box: z.number().positive().nullish(),
  size: z.number().nullish(),
  description: z.string().nullish(),
};

const createInput = z.object({
  ...input,
  id: z.string(),
  photos: Zphotos,
});

const updateInput = z.object({
  ...input,
  id: z.string(),
  photosToAdd: Zphotos.optional(),
  photosToUpdate: Zphotos.optional(),
  photosToDelete: z.array(z.string()).nullish(), //array of Image ids
  mainPhotoId: z.string().nullish(),
});

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
    .input(createInput)
    .mutation(async ({ ctx, input }) => {
      let indexForMain = 0;
      const newPhotos = input.photos.map((photo, index) => {
        if (photo.isMain && !indexForMain) {
          indexForMain = index;
          return photo;
        }
        return { ...photo, isMain: false };
      });

      const newToy = await ctx.prisma.toy.create({
        data: {
          title: input.title,
          type: input.type,
          dates: input.dates,
          material: input.material,
          category: input.category,
          photos: { create: newPhotos },
          box: input.box,
          description: input.description,
          size: input.size,
        },
        include: {
          photos: true,
          mainPhoto: true,
        },
      });
      const mainPhoto = newToy.photos.find((photo) => photo.isMain);
      if (mainPhoto)
        return await ctx.prisma.toy.update({
          where: { id: newToy.id },
          data: {
            mainPhoto: {
              connect: { id: mainPhoto.id },
            },
          },
        });

      return newToy;
    }),

  update: protectedProcedure
    .input(updateInput)
    .mutation(async ({ ctx, input }) => {
      if (input.photosToDelete)
        await ctx.prisma.image
          .findMany({ where: { id: { in: input.photosToDelete } } })
          .then((photos) =>
            photos.forEach((photo) => void deleteFile(photo.url))
          );

      const updatedToy = await ctx.prisma.toy.update({
        where: { id: input.id },
        data: {
          title: input.title,
          type: input.type,
          dates: input.dates,
          material: input.material,
          category: input.category,
          photos: {
            create: input.photosToAdd?.map((el) => ({
              title: el.title,
              url: el.url,
              aspect_ratio: el.aspect_ratio,
              isMain: el.isMain,
            })),
            deleteMany: input.photosToDelete?.map((el) => ({ id: el })),
            update: input.photosToUpdate?.map((el) => ({
              where: { id: el.id },
              data: { isMain: el.isMain },
            })),
          },
          box: input.box,
          description: input.description,
          size: input.size,
        },
        include: {
          photos: true,
          mainPhoto: true,
        },
      });

      const mainPhoto = await ctx.prisma.image.findFirst({
        where: { toyId: input.id, isMain: true },
      });
      if (!mainPhoto?.id) return updatedToy;

      return ctx.prisma.toy.update({
        where: { id: input.id },
        data: {
          mainPhoto: { connect: { id: mainPhoto.id } },
        },
        include: {
          photos: true,
          mainPhoto: true,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.image
        .findMany({ where: { toyId: input } })
        .then((photos) =>
          photos.forEach((photo) => void deleteFile(photo.url))
        );

      await ctx.prisma.image.deleteMany({ where: { toyId: input } });

      return await ctx.prisma.toy.delete({ where: { id: input } });
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.toy.findMany({
      include: { photos: true, mainPhoto: true },
    });
  }),
  get: protectedProcedure
    .input(z.object(zodGetInput))
    .query(async ({ ctx, input }) => {
      if (input.id)
        return await ctx.prisma.toy.findUnique({
          where: { id: input.id },
          include: {
            photos: true,
            mainPhoto: true,
          },
        });

      const sample = await ctx.prisma.toy.findMany({
        where: { box: input.box, dates: input.dates, type: input.type },
        include: {
          photos: true,
          mainPhoto: true,
        },
      });

      return sample;
    }),
});
