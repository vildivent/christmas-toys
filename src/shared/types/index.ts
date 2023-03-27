import type { Toy, Image } from "@prisma/client";

export type ToyItem = Toy & { photos: Image[]; mainPhoto?: Image | null };
