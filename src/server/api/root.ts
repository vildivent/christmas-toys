import { createTRPCRouter } from "./trpc";
import { toyRouter } from "./routers/toy";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  toy: toyRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
