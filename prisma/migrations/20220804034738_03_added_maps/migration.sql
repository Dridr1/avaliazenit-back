/*
  Warnings:

  - You are about to drop the `Avaliacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Candidatos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_avaliadorId_fkey";

-- DropForeignKey
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_candidatoId_fkey";

-- DropTable
DROP TABLE "Avaliacao";

-- DropTable
DROP TABLE "Candidatos";

-- CreateTable
CREATE TABLE "candidatos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "candidatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avaliacoes" (
    "id" SERIAL NOT NULL,
    "avaliadorId" INTEGER NOT NULL,
    "candidatoId" INTEGER NOT NULL,
    "orgIdeia" INTEGER NOT NULL,
    "TrabEquipe" INTEGER NOT NULL,
    "Lideranca" INTEGER NOT NULL,
    "Proatividade" INTEGER NOT NULL,
    "Criatividade" INTEGER NOT NULL,
    "JogoDeCintura" INTEGER NOT NULL,
    "Oratoria" INTEGER NOT NULL,
    "Postura" INTEGER NOT NULL,
    "Seguranca" INTEGER NOT NULL,
    "Resiliencia" INTEGER NOT NULL,
    "Etica" INTEGER NOT NULL,
    "Atencao" INTEGER NOT NULL,
    "obseracoes" TEXT NOT NULL,

    CONSTRAINT "avaliacoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_avaliadorId_fkey" FOREIGN KEY ("avaliadorId") REFERENCES "avaliadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_candidatoId_fkey" FOREIGN KEY ("candidatoId") REFERENCES "candidatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
