const userModel = require("../models/userModel");
const cryptModule = require("../services/hash");
const authConfig = require("../configs/authConfig");
const jwt = require("jsonwebtoken");
const dbConnect = require("../database/dbWorker");
const userController = require("../controllers/userController");


class authService {

    constructor() {
        this.authUser = this.authUser.bind(this);
        this.updateToken = this.updateToken.bind(this);
    }

    async authUser(req, res1) {
        let {email, password} = req.body;
        dbConnect.query(`SELECT * FROM "User" WHERE email='${email}'`).then((res) => {
            let resultRows = res.rows[0];
            if (!resultRows) {
                return res1.status(400).json({"messageError": "Пользователь не был найден"});
            }

            let checkPassword = cryptModule.verifyPassword(password, resultRows.hashed_password).then((res2) => {
                if (res2 === true) {
                    this.createTokens(resultRows.id).then((result) => {return res1.status(200).json(result)});
                } else {
                    return res1.status(401).json({"messageError": "Не авторизирован"});
                }
            });
        }).catch((er) => {
            return res1.status(401).json({"messageError": "Не авторизирован"});
        });
    }
    
    async registerUser(req, res) {
        let body = req.body;
        let bodyVal = Object.values(req.body);
        let newUser = new userModel(...bodyVal);
        if (!newUser) {
            return res.status(400).json({"messageError": "Не верные данные"})
        } else {
            let oldpass = body.password;
            newUser.hashed_password = await cryptModule.hashedPassword(body.password);
            userController.createUser(newUser, req, res);
        }
    }

    async createTokens(id) {
        let token = jwt.sign({sub: id}, authConfig.tokenKey, {expiresIn: "15m"});
        let refreshToken = jwt.sign({sub: id}, authConfig.refreshTokenKey, {expiresIn: "30d"});
        return {"accessToken": token, "refreshToken": refreshToken};
    }

    async updateToken(req, res) {
        let tokenData = req.headers;
        if (tokenData.cookie) {
            let token = tokenData.cookie.split("=")[1];
            try {
                jwt.verify(token.slice(1, token.length-1), authConfig.refreshTokenKey);
                let data = jwt.decode(token.slice(1, token.length-1));
                return res.status(200).json(await this.createTokens(data.sub));
            } catch {
                return res.status(401).send("Неверный токен");
            }
        }
    }
}


module.exports = new authService();