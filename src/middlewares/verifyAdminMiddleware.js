import jwt from "jsonwebtoken";

const verifyAdminMiddleware = async (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(' ')[2];

    if (!token) return res.sendStatus(401);

    try {

        const { nome, status } = jwt.decode(token, process.env.JWT_SECRET);

        if (nome !== "Adriano" || status !== "admin") return res.sendStatus(401);

        return next();

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export default verifyAdminMiddleware;