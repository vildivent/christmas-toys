/*
  Warnings:

  - A unique constraint covering the columns `[mainPhotoId]` on the table `Toy` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "isMain" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Toy" ADD COLUMN     "mainPhotoId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Toy_mainPhotoId_key" ON "Toy"("mainPhotoId");

-- AddForeignKey
ALTER TABLE "Toy" ADD CONSTRAINT "Toy_mainPhotoId_fkey" FOREIGN KEY ("mainPhotoId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
