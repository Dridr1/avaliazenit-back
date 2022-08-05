import jwt from "jsonwebtoken";
import * as evaluatorRepository from "../repositories/evaluatorRepository.js";

const verifyLoginMiddleware = async (req, res, next) => {
    const authHeader = req.header("Authorization");
    
    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(' ')[2];

    if (!token) return res.sendStatus(401);

    try {

        const { nome } = jwt.decode(token, process.env.JWT_SECRET);

        if (!await evaluatorRepository.findUser(nome)) return res.sendStatus(401);

        return next();

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export default verifyLoginMiddleware;