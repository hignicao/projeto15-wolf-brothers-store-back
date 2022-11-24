import { Router } from "express";
import {
  deleteProductFromCart,
  getProductsInTheCart,
  postProductToCart,
} from "../controllers/cartController.js";
import { authValidation } from "../middlewares/authValidationMiddleware.js";
import { productExistenceValidation } from "../middlewares/productExistenceValidationMiddleware.js";

const cartRouter = Router();
cartRouter.use(authValidation);
cartRouter.post(
  "/cart/:productId",
  productExistenceValidation,
  postProductToCart
);
cartRouter.get("/cart", getProductsInTheCart);
cartRouter.delete("/cart/:productId", deleteProductFromCart);
export default cartRouter;
