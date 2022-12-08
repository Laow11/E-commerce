import { Router } from "express";
import {
  inicioRoutes,
  createProduct,
  getProducts,
} from "../controllers/controllers.js";

const productsRouter = Router();

productsRouter.get("/", inicioRoutes);
productsRouter.get("/products", getProducts);
productsRouter.post("/products", createProduct);

export default productsRouter;
