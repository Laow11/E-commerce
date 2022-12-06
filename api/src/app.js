const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/mainRouter");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(mainRouter);

module.exports = server;
