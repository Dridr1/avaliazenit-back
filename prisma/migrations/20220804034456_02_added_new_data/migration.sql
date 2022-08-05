/*
  Warnings:

  - Added the required column `obseracoes` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Avaliacao" ADD COLUMN     "obseracoes" TEXT NOT NULL;
