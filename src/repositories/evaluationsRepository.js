import prisma from "../database.js";

export const insert = async (data) => await prisma.avaliacao.create({data: data});