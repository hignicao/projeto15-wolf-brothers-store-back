import { Router } from "express";
import {
  getFilteredProducts,
  getProducts,
  getSelectedProduct,
} from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/products", getProducts);
productsRouter.get("/products/:idProduct", getSelectedProduct);
productsRouter.get("/filter_products/:name", getFilteredProducts);
