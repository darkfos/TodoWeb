require("dotenv").config();

const authConfiguration = {
    tokenKey: process.env.TOKEN_KEY,
    refreshTokenKey: process.env.RTOKEN_KEY,
    alg: process.env.ALGORITHM,
    salt: process.env.SALT
}


module.exports = authConfiguration;