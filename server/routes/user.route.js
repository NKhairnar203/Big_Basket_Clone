const express = require("express");
const UserRoute = express.Router();
const Controller = require("../controller/appAuth.controller");
const User = require("../models/user.model");

UserRoute.post("/register", Controller.Register);
UserRoute.post("/login", Controller.Login);

module.exports = UserRoute;
