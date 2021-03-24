const express = require("express");
const agendsRouter = require("./agends.routes.js");

const routes = express.Router();

routes.use("/agends", agendsRouter);

module.exports = routes;
