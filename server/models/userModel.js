const mainModel = require("./mainModel");

class UserModel extends mainModel{
    constructor (name, email, password) {
        this.validateNameAndPassword = this.validateNameAndPassword.bind(this);
        this.name = name;
        this.email = email;
        this.password = password;

        let isValidate = this.validateNameAndPassword();
        if (!isValidate) {
            throw Error
        }
    }

    validateNameAndPassword() {
        if (typeof this.name === "string" && this.name.length <= 120 && typeof this.password === "string") {
            return true
        }
        return false
    }
}