const dbConnection = require("../database/dbWorker");


class UserController {

    constructor () {
        this.userModel = require("../models/userModel");

        this.createUser = this.createUser.bind(this);
        this.allInfromationAboutUser = this.allInfromationAboutUser.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.deactivateAccount = this.deactivateAccount.bind(this);
    }
    
    createUser(model, req, res) {
        dbConnection.query(`INSERT INTO "User" ${model.getColumns()} VALUES ${model.getValues()}`).then((resp) => {
            return res.status(201).send("Пользователь был создан");
        }).catch((err) => {
            console.log(err, model.getColumns(), model.getValues());
            return res.status(400).send("Не удалось создать пользователя");
        })
    }

    allInfromationAboutUser(req, res) {

    }

    updatePassword(req, res) {

    }

    deactivateAccount(req, res) {

    }
}


module.exports = new UserController();