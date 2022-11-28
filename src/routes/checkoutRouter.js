import { Router } from "express";
import { getOrders, postPurchase } from "../controllers/checkoutController.js";
import { authValidation } from "../middlewares/authValidationMiddleware.js";
import { checkout } from "../middlewares/checkoutMiddleware.js";

const checkoutRouter = Router();

checkoutRouter.use(authValidation);

checkoutRouter.post("/checkout", checkout, postPurchase);
checkoutRouter.get("/checkout", getOrders);

export default checkoutRouter;
