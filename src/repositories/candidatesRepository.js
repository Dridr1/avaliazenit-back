import prisma from "../database.js";

export const insert = async (nome) => await prisma.candidatos.create({ data: { nome } });

export const findCandidate = async (nome) => await prisma.candidatos.findUnique({where: {nome}});
