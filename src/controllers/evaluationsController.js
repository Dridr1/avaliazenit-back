import * as evaluationsRepository from "../repositories/evaluationsRepository.js";

export const newEvaluation = async (req, res) => {
    const data = req.body;

    if (
        !data.avaliadorId || !data.candidatoId ||
        !data.orgIdeia || !data.TrabEquipe ||
        !data.Lideranca || !data.Proatividade ||
        !data.Criatividade || !data.JogoDeCintura ||
        !data.Oratoria || !data.Postura ||
        !data.Seguranca || !data.Resiliencia ||
        !data.Etica || !data.Atencao ||
        !data.obseracoes
    ) return res.sendStatus(400);

    try {

        await evaluationsRepository.insert(data);

        return res.sendStatus(201);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};