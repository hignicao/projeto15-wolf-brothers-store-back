import { Router } from "express";
import {
  getFilteredProducts,
  getProducts,
  getSelectedProduct,
  postProduct,
} from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/products", getProducts);
productsRouter.get("/products/:idProduct", getSelectedProduct);
productsRouter.get("/filter_products/:name", getFilteredProducts);
productsRouter.post("/producs", postProduct);
export default productsRouter;