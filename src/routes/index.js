import { Router } from "express";
import cartRouter from "./cartRouter.js";
import productsRouter from "./productsRouter.js";
import usersRouter from "./usersRouter.js";

const router = Router();

router.use(productsRouter);
router.use(usersRouter);
router.use(cartRouter);
export default router;