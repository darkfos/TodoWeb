const express = require("express");
const authRouter = express.Router();
const authService = require("../auth/authService");
const multer = require("../configs/multerConfig");


// Endpoint's
authRouter.post("/login", authService.authUser);
authRouter.post("/register", multer.single("avatar"), authService.registerUser);
authRouter.post("/updateToken", authService.updateToken);



module.exports = authRouter;