const express = require("express");
const ProductRoute = express.Router();
const Controller = require("../controller/product.comtroller");
const User = require("../models/user.model");

ProductRoute.post("/create", Controller.Create);
ProductRoute.get("/all-products", Controller.Products);

module.exports = ProductRoute;
