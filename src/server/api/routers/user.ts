import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  update: protectedProcedure
    .input(
      z.object({ id: z.string(), role: z.enum(["ADMIN", "USER", "GUEST"]) })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.user.update({
        where: { id: input.id },
        data: { role: input.role },
      });
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findMany({
      orderBy: { name: "desc" },
    });
  }),
});
