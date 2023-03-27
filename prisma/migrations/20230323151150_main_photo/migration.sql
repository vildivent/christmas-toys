/*
  Warnings:

  - Made the column `mainPhotoId` on table `Toy` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Toy" DROP CONSTRAINT "Toy_mainPhotoId_fkey";

-- AlterTable
ALTER TABLE "Toy" ALTER COLUMN "mainPhotoId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Toy" ADD CONSTRAINT "Toy_mainPhotoId_fkey" FOREIGN KEY ("mainPhotoId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
