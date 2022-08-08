import { Router } from "express";
import { addNewCandidate, getCandidates } from "../controllers/candidatesController.js";
import verifyAdminMiddleware from "../middlewares/verifyAdminMiddleware.js";
import verifyLoginMiddleware from "../middlewares/verifyLoginMiddleware.js";

const candidatesRouter = Router();

candidatesRouter.post("/new-candidate", verifyAdminMiddleware, addNewCandidate);
candidatesRouter.get("/candidates", verifyLoginMiddleware, getCandidates);

export default candidatesRouter;