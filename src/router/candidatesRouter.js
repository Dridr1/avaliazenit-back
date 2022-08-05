import { Router } from "express";
import { addNewCandidate } from "../controllers/candidatesController.js";
import verifyAdminMiddleware from "../middlewares/verifiAdminMiddleware.js";

const candidatesRouter = Router();

candidatesRouter.post("/new-candidate",  verifyAdminMiddleware, addNewCandidate);

export default candidatesRouter;