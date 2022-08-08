import jwt from "jsonwebtoken";

const verifyAdminMiddleware = async (req, res, next) => {
    const authHeader = req.header("Authorization");
    console.log(authHeader);
    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(' ')[1];
    console.log(token);
    if (!token) return res.sendStatus(401);

    try {

        const { user, status } = jwt.decode(token, process.env.JWT_SECRET);
        console.log(user, status);
        if (user !== "Adriano" || status !== "admin") return res.sendStatus(401);

        return next();

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export default verifyAdminMiddleware;