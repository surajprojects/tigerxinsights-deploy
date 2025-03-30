/*
  Warnings:

  - You are about to drop the column `category` on the `Toolkit` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Toolkit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Toolkit" DROP COLUMN "category",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ALTER COLUMN "link" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "Toolkit" ADD CONSTRAINT "Toolkit_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
