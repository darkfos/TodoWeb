const dbConnection = require("../database/dbWorker");


class TaskController {

    constructor () {
        this.taskModel = require("../models/taskModel");

        this.createTask = this.createTask.bind(this);
        this.getAllTasksByUserId = this.getAllTasksByUserId.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    createTask(req, res) {

    }

    getAllTasksByUserId(req, res) {

    }

    updateTask(req, res) {

    }

    deleteTask(req, res) {

    }

}


module.exports = new TaskController();