import { Router } from "express";
import productsRouter from "./productsRouter.js";
const mainRouter = Router();

mainRouter.use("/", productsRouter);

export default mainRouter;
