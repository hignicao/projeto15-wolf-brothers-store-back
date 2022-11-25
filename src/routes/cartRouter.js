import { Router } from "express";
import {
  deleteProductFromCart,
  getProductsInTheCart,
  postProductToCart,
} from "../controllers/cartController.js";
import { addProductToCartValidation } from "../middlewares/addProductToCartValidationMiddleware.js";
import { authValidation } from "../middlewares/authValidationMiddleware.js";
import { cartCheckout } from "../middlewares/cartCheckoutMiddleware.js";
import { deleteProductfromCartValidation } from "../middlewares/deleteProductFromCartValidationMiddleware.js";


const cartRouter = Router();
cartRouter.use(authValidation);
cartRouter.post(
  "/cart/:productId",
  addProductToCartValidation,
  postProductToCart
);
cartRouter.get("/cart", getProductsInTheCart);
cartRouter.delete(
  "/cart/:productId",
  deleteProductfromCartValidation,
  deleteProductFromCart
);
cartRouter.post("/cart/checkout",cartCheckout)
export default cartRouter;
