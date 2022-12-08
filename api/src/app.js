import express from "express";
import morgan from "morgan";
import mainRouter from "./routes/mainRouter.js";
import cors from "cors";
import "./DB/database.js";
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(mainRouter);

export default server;
