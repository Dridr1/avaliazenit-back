import * as candidatesRepository from "../repositories/candidatesRepository.js";

export const addNewCandidate = async (req, res) => {
    const { nome } = req.body;
    try {
        await candidatesRepository.insert(nome);

        return res.sendStatus(201);

    } catch (error) {
        console.log(error);
    }
};