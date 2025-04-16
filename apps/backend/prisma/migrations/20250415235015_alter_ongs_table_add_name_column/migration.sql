/*
  Warnings:

  - Added the required column `name` to the `ongs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ongs" ADD COLUMN     "name" TEXT NOT NULL;
