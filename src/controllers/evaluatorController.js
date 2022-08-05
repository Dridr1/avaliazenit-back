import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as evaluatorRepository from "../repositories/evaluatorRepository.js";

const key = process.env.JWT_SECRET;

export const addNewEvaluator = async (req, res) => {
    const { nome, senha } = req.body;
    const cryptPsswrd = await bcrypt.hash(senha, 15);
    try {
        await evaluatorRepository.insert(nome, cryptPsswrd);
        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
    }
}

export const login = async (req, res) => {
    const {nome, senha} = req.body;
    try {
        const userData = await evaluatorRepository.findUser(nome);
        if (bcrypt.compare(senha, userData.senha))
            return res.send(jwt.sign({nome}, key, {expiresIn: "6h"}));
        else return res.sendStatus(401);
    } catch (error) {
        console.log(error);
    }
}

