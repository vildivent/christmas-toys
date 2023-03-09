/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_toyId_fkey";

-- DropTable
DROP TABLE "Image";

-- CreateTable
CREATE TABLE "ToyImage" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "aspect_ratio" DOUBLE PRECISION NOT NULL,
    "toyId" TEXT NOT NULL,

    CONSTRAINT "ToyImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ToyImage" ADD CONSTRAINT "ToyImage_toyId_fkey" FOREIGN KEY ("toyId") REFERENCES "Toy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
