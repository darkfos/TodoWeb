require("dotenv").config();

const databaseConfiguration = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    name: process.env.DATABASE,
    port: process.env.PORT
}

module.exports = databaseConfiguration;