/*
  Warnings:

  - Added the required column `category` to the `Toolkit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Toolkit" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "snippet" TEXT;
