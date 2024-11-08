const dbConnection = require("../database/dbWorker");


class UserController {

    constructor () {
        this.userModel = require("../models/userModel");

        this.createUser = this.createUser.bind(this);
        this.allInfromationAboutUser = this.allInfromationAboutUser.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.deactivateAccount = this.deactivateAccount.bind(this);
    }
    
    createUser(req, res) {

    }

    allInfromationAboutUser(req, res) {

    }

    updatePassword(req, res) {

    }

    deactivateAccount(req, res) {

    }
}


module.exports = new UserController();