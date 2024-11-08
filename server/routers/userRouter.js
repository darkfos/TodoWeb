const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");


// Endpoint's
userRouter.get("/information_about_me", userController.allInfromationAboutUser);
userRouter.post("/updatePassword", userController.updatePassword);
userRouter.delete("/deleteMe", userController.deactivateAccount);


module.exports = userRouter;