const express = require("express");
const authRouter = express.Router();
const authService = require("../auth/authService");


// Endpoint's
authRouter.post("/login", authService.authUser);
authRouter.post("/register", authService.registerUser);
authRouter.post("/updateToken", authService.updateToken);



module.exports = authRouter;