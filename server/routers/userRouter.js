const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");


// Endpoint's
userRouter.get("/information", userController.allInfromationAboutUser);
userRouter.put("/updatePassword", userController.updatePassword);
userRouter.delete("/deleteMe", userController.deactivateAccount);


module.exports = userRouter;