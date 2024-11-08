const express = require("express");
const apiConfig = require("./configs/apiConfig");


/**
 * Entry Point
 */
function startApplication() {
    const app = express();

    app.listen(apiConfig.apiPort, () => {
        console.log(`Server is started on port ${apiConfig.apiPort}`);
    })
};



startApplication();