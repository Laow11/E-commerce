<<<<<<< HEAD
import express from 'express'
import morgan from 'morgan'
import mainRouter from './routes/mainRouter.js'

const server = express()
=======
import express from "express";
import morgan from "morgan";
import mainRouter from "./routes/index.js";
import "./DB/database.js";
const server = express();
>>>>>>> c8bd79ef521e53b4b7dc13c57a2ca58e6fc87022

server.use(morgan('dev'))
server.use(express.json())
server.use(mainRouter)

<<<<<<< HEAD
export default server
=======
export default server;
>>>>>>> c8bd79ef521e53b4b7dc13c57a2ca58e6fc87022
