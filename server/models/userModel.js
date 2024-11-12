const mainModel = require("./mainModel");

class UserModel extends mainModel{
    constructor (name, email, hashed_password, img_url) {

        super();
        let dateNow = new Date();

        this.name = name;
        this.email = email;
        this.hashed_password = hashed_password;
        this.date_reg = `${dateNow.getFullYear()}-${dateNow.getMonth()}-${dateNow.getDay()}`;
        this.date_upd = `${dateNow.getFullYear()}-${dateNow.getMonth()}-${dateNow.getDay()}`;
        this.img_url = img_url;

        this.validateNameAndPassword = this.validateNameAndPassword.bind(this);

        let isValidate = this.validateNameAndPassword();
        if (!isValidate) {
            throw Error
        }
    }

    validateNameAndPassword() {
        if (typeof this.name === "string" && this.name.length <= 120 && typeof this.hashed_password === "string" && typeof this.img_url === "string") {
            return true
        }
        return false
    }
}


module.exports = UserModel;