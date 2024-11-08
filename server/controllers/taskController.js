const dbConnection = require("../database/dbWorker");


class TaskController {

    constructor () {
        this.taskModel = require("../models/taskModel");

        this.createTask = this.createTask.bind(this);
        this.getAllTasksByUser = this.getAllTasksByUser.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    createTask(req, res) {

    }

    getAllTasksByUser(req, res) {

    }

    getTaskById(req, res) {

    }

    updateTask(req, res) {

    }

    deleteTask(req, res) {

    }

}


module.exports = new TaskController();