import { Router } from "express";
import * as adminController from "../controllers/adminController.js";

const adminRouter = Router();

adminRouter.post("/adm-login", adminController.login);

export default adminRouter;