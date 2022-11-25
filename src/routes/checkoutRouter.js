import { Router } from "express";
import { postPurchase } from "../controllers/checkoutConroller.js";
import { authValidation } from "../middlewares/authValidationMiddleware.js";
import { checkout } from "../middlewares/checkoutMiddleware.js";

const checkoutRouter = Router();
authValidation;
checkoutRouter.post("/checkout", authValidation, checkout, postPurchase);

export default checkoutRouter;