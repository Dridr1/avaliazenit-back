import * as evaluationsRepository from "../repositories/evaluationsRepository.js";

export const newEvaluation = async (req, res) => {
    const data = req.body;
    
    const parsedData = {
        avaliadorId:  parseInt(data.avaliadorId),
        candidato: data.candidato,
        orgIdeia: parseInt(data.orgIdeia),
        TrabEquipe: parseInt(data.TrabEquipe),
        Lideranca: parseInt(data.Lideranca),
        Proatividade: parseInt(data.Proatividade),
        Criatividade: parseInt(data.Criatividade),
        JogoDeCintura: parseInt(data.JogoDeCintura),
        Oratoria: parseInt(data.Oratoria),
        Postura: parseInt(data.Postura),
        Seguranca: parseInt(data.Seguranca),
        Resiliencia: parseInt(data.Resiliencia),
        Etica: parseInt(data.Etica),
        Atencao: parseInt(data.Atencao),
        observacoes: data.observacoes
    }

    for (const key in parsedData) 
    {
        if (parsedData[`${key}`] === undefined) delete parsedData[`${key}`];
    }

    try {

        await evaluationsRepository.insert(parsedData);

        return res.sendStatus(201);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};