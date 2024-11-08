require("dotenv").config();

const databaseConfiguration = {
    user: process.env.USERDB,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.PORT
}

module.exports = databaseConfiguration;