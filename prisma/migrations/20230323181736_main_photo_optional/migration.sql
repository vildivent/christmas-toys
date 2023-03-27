-- DropForeignKey
ALTER TABLE "Toy" DROP CONSTRAINT "Toy_mainPhotoId_fkey";

-- AlterTable
ALTER TABLE "Toy" ALTER COLUMN "mainPhotoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Toy" ADD CONSTRAINT "Toy_mainPhotoId_fkey" FOREIGN KEY ("mainPhotoId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
