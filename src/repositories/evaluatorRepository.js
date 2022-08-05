import prisma from "../database.js";

export const insert = async (nome, senha) => await prisma.avaliadores.create({ data: { nome, senha } });

export const findUser = async (nome) => await prisma.avaliadores.findUnique({where: {nome}});