const mainModel = require("./mainModel");

class UserModel extends mainModel{
    constructor (name, email, hashed_password) {
        super();
        this.name = name;
        this.email = email;
        this.hashed_password = hashed_password;

        this.validateNameAndPassword = this.validateNameAndPassword.bind(this);
        let isValidate = this.validateNameAndPassword();
        if (!isValidate) {
            throw Error
        }
    }

    validateNameAndPassword() {
        if (typeof this.name === "string" && this.name.length <= 120 && typeof this.hashed_password === "string") {
            return true
        }
        return false
    }
}


module.exports = UserModel;