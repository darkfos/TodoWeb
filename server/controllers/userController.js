const dbConnection = require("../database/dbWorker");
const authConfig = require("../configs/authConfig");
const jwt = require("jsonwebtoken");
const crypto = require("../services/hash");


class UserController {

    constructor () {
        this.userModel = require("../models/userModel");

        this.createUser = this.createUser.bind(this);
        this.allInfromationAboutUser = this.allInfromationAboutUser.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.deactivateAccount = this.deactivateAccount.bind(this);
    }
    
    createUser(model, req, res) {
        console.log(model.getValues(), model.getColumns());
        dbConnection.query(`INSERT INTO "User" ${model.getColumns()} VALUES ${model.getValues()}`).then((resp) => {
            return res.status(201).send("Пользователь был создан");
        }).catch((err) => {
            console.log(err);
            return res.status(400).send("Не удалось создать пользователя");
        })
    }

    allInfromationAboutUser(req, res) {
        let token = req.headers.authorization;
        let checkToken = this.checkToken(token.split(" ")[1]);
        if (!token && checkToken === false) {
            return res.status(401).json({"message": "Незарегистрированный пользователь"});
        }
        dbConnection.query(`SELECT u."name", u."email", u."date_reg", u."date_upd", u."img_url", COUNT(t.id) FROM "User" AS u LEFT JOIN "Tasks" AS t ON t."id_user" = u."id" WHERE u."id"=${checkToken.sub} GROUP BY u."id"`).then((r) => {
            let result = r.rows[0];

            return res.status(200).json({
                name: result.name,
                email: result.email,
                date_reg: result.date_reg,
                date_upd: result.date_upd,
                tasksCount: result.count,
                img_url: result.img_url
            })
        }).catch((e) => { console.log(e); return res.status(400).send("Пользователь не был найден") })
    }

    updatePassword(req, res) {
        let token = req.headers.authorization;
        let toUpdate = req.body;
        let checkToken = this.checkToken(token.split(" ")[1]);

        if (!token || checkToken === false || toUpdate.password === undefined) {
            return res.status(401).json({"message": "Незарегистрированный пользователь"});
        }
        
        crypto.hashedPassword(toUpdate.password).then(password => {
            dbConnection.query(`UPDATE "User" SET hashed_password='${password}' WHERE id=${checkToken.sub}`).then((r) => {
                return res.status(200).send("Пароль был успешно обновлен");
            }).catch((error) => { res.status(400).send("Не удалось обновить пароль") });
        }).catch((er) => {res.status(400).send("Не удалось провести шифрование пароля")});
    }

    deactivateAccount(req, res) {
        let token = req.headers.authorization;
        let toUpdate = req.body;
        let checkToken = this.checkToken(token.split(" ")[1]);

        if (!token || checkToken === false || toUpdate.password === undefined) {
            return res.status(401).json({"message": "Незарегистрированный пользователь"});
        }

        dbConnection.query(`DELETE FROM "User" WHERE id=${checkToken.sub}`).then((r) => {
            return res.status(200).send("Пользователь удалил свой аккаунт");
        }).catch((e) => {res.status(400).send("Пользователь не смог удалить аккаунт")})
    }

    checkToken(token) {
        try {
            if (jwt.verify(token, authConfig.tokenKey)) {
                return jwt.decode(token)
            } return false
        } catch (er) {
            return false
        }
    }
}


module.exports = new UserController();