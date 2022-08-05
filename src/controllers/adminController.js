import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    const { user, password } = req.body;
    try {
        if (user == process.env.ADMIN_USER && password == process.env.ADMIN_PASSWORD) {
            return res.send(jwt.sign({ user, status: "admin" }, process.env.JWT_SECRET))
        } else return res.sendStatus(401);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}