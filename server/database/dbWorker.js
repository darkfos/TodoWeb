    const dbPg = require("pg");
    const dbConfig = require("../configs/databaseConfig");

    const client = new dbPg.Client(
        dbConfig
    );

    client.connect().then(() => {
        console.log("DB is connected");
    }).catch((er) => {
        console.log("DB is not connected");
    })

    module.exports = client;