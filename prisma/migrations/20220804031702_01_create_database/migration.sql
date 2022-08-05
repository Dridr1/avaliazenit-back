-- CreateTable
CREATE TABLE "avaliadores" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "avaliadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidatos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Candidatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
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

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "avaliadores_nome_key" ON "avaliadores"("nome");

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_avaliadorId_fkey" FOREIGN KEY ("avaliadorId") REFERENCES "avaliadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_candidatoId_fkey" FOREIGN KEY ("candidatoId") REFERENCES "Candidatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
