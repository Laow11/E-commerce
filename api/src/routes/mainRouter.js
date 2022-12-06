const { Router } = require("express");

const mainRouter = Router();

mainRouter.get("/", function (req, res) {
  res.send("Hello, world!");
});

module.exports = mainRouter;
