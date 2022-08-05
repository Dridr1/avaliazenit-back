import { Router } from "express";
import verifyLoginMiddleware from "../middlewares/verifyLoginMiddleware.js";
import * as evaluationsController from "../controllers/evaluationsController.js";

const evaluationsRouter = Router();

evaluationsRouter.post("/new-evaluation", verifyLoginMiddleware, evaluationsController.newEvaluation);

export default evaluationsRouter;