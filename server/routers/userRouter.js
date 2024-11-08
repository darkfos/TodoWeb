const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");


// Endpoint's
userRouter.get("/information_about_me");
userRouter.delete("/deleteMe");
userRouter.post("/updatePassword");