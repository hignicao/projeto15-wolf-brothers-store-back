import { Router } from "express";
import {
  deleteProductFromCart,
  getProductsInTheCart,
  postProductToCart,
} from "../controllers/cartController.js";
import { addProductToCartValidation } from "../middlewares/addProductToCartValidationMiddleware.js";
import { authValidation } from "../middlewares/authValidationMiddleware.js";


const cartRouter = Router();
cartRouter.use(authValidation);
cartRouter.post(
  "/cart/:productId",
 addProductToCartValidation,
  postProductToCart
);
cartRouter.get("/cart", getProductsInTheCart);
cartRouter.delete("/cart/:productId", deleteProductFromCart);
export default cartRouter;
