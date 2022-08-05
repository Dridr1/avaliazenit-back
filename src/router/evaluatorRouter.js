import { Router } from "express";
import * as evaluatorController from "../controllers/evaluatorController.js";

const evaluatorRouter = Router();

evaluatorRouter.post("/new-evaluator", evaluatorController.addNewEvaluator);
evaluatorRouter.post("/login", evaluatorController.login);

export default evaluatorRouter;