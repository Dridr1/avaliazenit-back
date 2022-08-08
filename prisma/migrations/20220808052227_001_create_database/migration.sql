-- CreateTable
CREATE TABLE "avaliadores" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "avaliadores_pkey" PRIMARY KEY ("id")
);

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
    "candidato" TEXT NOT NULL,
    "orgIdeia" INTEGER,
    "TrabEquipe" INTEGER,
    "Lideranca" INTEGER,
    "Proatividade" INTEGER,
    "Criatividade" INTEGER,
    "JogoDeCintura" INTEGER,
    "Oratoria" INTEGER,
    "Postura" INTEGER,
    "Seguranca" INTEGER,
    "Resiliencia" INTEGER,
    "Etica" INTEGER,
    "Atencao" INTEGER,
    "observacoes" TEXT,

    CONSTRAINT "avaliacoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "avaliadores_nome_key" ON "avaliadores"("nome");

-- AddForeignKey
ALTER TABLE "avaliacoes" ADD CONSTRAINT "avaliacoes_avaliadorId_fkey" FOREIGN KEY ("avaliadorId") REFERENCES "avaliadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
