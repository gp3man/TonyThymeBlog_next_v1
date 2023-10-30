/*
  Warnings:

  - Added the required column `updateAt` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "UsefulReview" (
    "id" SERIAL NOT NULL,
    "readerId" TEXT NOT NULL,
    "useful" BOOLEAN NOT NULL,
    "reviewId" INTEGER,

    CONSTRAINT "UsefulReview_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UsefulReview" ADD CONSTRAINT "UsefulReview_readerId_fkey" FOREIGN KEY ("readerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsefulReview" ADD CONSTRAINT "UsefulReview_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE SET NULL ON UPDATE CASCADE;
