const crypto = require("bcrypt");
const authConfig = require("../configs/authConfig");
const salt = crypto.genSaltSync(10);

let hashedPassword = async (password) => {
    return await crypto.hash(password, authConfig.salt);
}


let verifyPassword = async (password, hashed_password) => {
    console.log(password, hashed_password)
    return crypto.compare(password, hashed_password)
}


module.exports = {hashedPassword, verifyPassword};