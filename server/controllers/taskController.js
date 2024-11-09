const dbConnection = require("../database/dbWorker");
const jwt = require("jsonwebtoken");
const crypto = require("../services/hash");
const authConfig = require("../configs/authConfig");
const userController = require("./userController");
const TaskModel = require("../models/taskModel");


class TaskController {

    constructor () {
        this.taskModel = require("../models/taskModel");

        this.createTask = this.createTask.bind(this);
        this.getAllTasksByUser = this.getAllTasksByUser.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    createTask(req, res) {
        let tokenData = req.headers.authorization;
        let bodyTask = req.body;
        let checkToken = userController.checkToken(tokenData.split(" ")[1]);
        if (!tokenData || checkToken === false) { return res.status(401).json({"message": "Незарегистрированный пользователь"}); }
        
        let newTask = new TaskModel(...Object.values(bodyTask));
        newTask.id_user=checkToken.sub;
        dbConnection.query(`INSERT INTO "Tasks" ${newTask.getColumns()} VALUES ${newTask.getValues()}`).then((r) => {
            return res.status(201).json({"message": "Задача была успешно создана"})
        }).catch((e) => { res.status(400).send("Не удалось создать задачу") })
    }

    getAllTasksByUser(req, res) {
        let tokenData = req.headers.authorization;
        let checkToken = userController.checkToken(tokenData.split(" ")[1]);
        if (!tokenData || checkToken === false) { return res.status(401).json({"message": "Незарегистрированный пользователь"}); }

        dbConnection.query(`SELECT * FROM "Tasks" WHERE id_user=${checkToken.sub}`).then((e) => {
            return res.status(200).json({"tasks": e.rows})
        }).catch((e) => { return res.status(400).send("Не были найдены задачи") })
    }

    getTaskById(req, res) {
        let tokenData = req.headers.authorization;
        let {id} = req.params;
        let checkToken = userController.checkToken(tokenData.split(" ")[1]);
        if (!tokenData || checkToken === false) { return res.status(401).json({"message": "Незарегистрированный пользователь"}); }
        
        dbConnection.query(`SELECT * FROM "Tasks" WHERE id=${id}`).then((r) => {
            return res.status(200).json({"task": r.rows})
        }).catch((e) => { return res.status(400).send("Не удалось найти задачу по идентификатору = " + id) })
    }

    updateTask(req, res) {
        let bodyReq = req.body;
        let tokenData = req.headers.authorization;
        let {id} = req.params;
        let checkToken = userController.checkToken(tokenData.split(" ")[1]);

        if (!tokenData || checkToken === false) { return res.status(401).json({"message": "Незарегистрированный пользователь"}); }
        if (bodyReq.id || bodyReq.id_user) { return res.status(400).send("Переданы неверные данные!") }

        for (let key in bodyReq) {
            dbConnection.query(`UPDATE "Tasks" SET ${key}='${bodyReq[key]}' WHERE id=${id}`).then((r) => {
            }).catch((e) => { console.log(e); return res.status(400).send("Не удалось обновить запись") });
        }

        return res.status(200).send("Запись была успешно обновлена");
    }

    deleteTask(req, res) {
        let tokenData = req.headers.authorization;
        let {id} = req.params;
        let checkToken = userController.checkToken(tokenData.split(" ")[1]);

        if (!tokenData || checkToken === false) { return res.status(401).json({"message": "Незарегистрированный пользователь"}); }

        dbConnection.query(`DELETE FROM "Tasks" WHERE id=${id}`).then((r) => {
            return res.status(200).send("Задача была удалена");
        }).catch((e) => {
            return res.status(400).send("Не удалось удалить задачу");
        })
    }

}


module.exports = new TaskController();