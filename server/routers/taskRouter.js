const express = require("express");
const taskRouter = express.Router();
const taskController = require("../controllers/taskController");


// Endpoint's
taskRouter.post("/createTask", taskController.createTask);
taskRouter.get("/myTasks", taskController.getAllTasksByUser);
taskRouter.get("/task/:id", taskController.getTaskById);
taskRouter.put("/updateTask/:id", taskController.updateTask);
taskRouter.delete("/delete/:id", taskController.deleteTask);


module.exports = taskRouter;