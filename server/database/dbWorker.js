const dbPg = require("pg");
const dbConfig = require("../configs/databaseConfig");

const client = new dbPg.Client(
    dbConfig
);


export default client;