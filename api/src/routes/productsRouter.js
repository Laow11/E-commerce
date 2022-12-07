import { Router } from "express";
import getProducts from "../controllers/controllers.js";
import createProduct from "../controllers/controllers.js";

const productsRouter = Router();

productsRouter.get("/products", getProducts);
productsRouter.post("/products", createProduct);

export default productsRouter;
