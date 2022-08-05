import { Router } from "express";
import evaluatorRouter from "./evaluatorRouter.js";
import candidatesRouter from "./candidatesRouter.js";
import evaluationsRouter from "./evaluationsRouter.js";
import adminRouter from "./adminRouter.js";

const router = Router();

router.use(evaluatorRouter);
router.use(candidatesRouter);
router.use(evaluationsRouter);
router.use(adminRouter);

export default router;