const expressApp = require("express");
const apiConfig = require("./configs/apiConfig");


// Router's
const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");
const taskRouter = require("./routers/taskRouter");


/**
 * Entry Point
 */
function startApplication() {
    const app = expressApp();

    app.use(expressApp.json());
    app.use("/api/v1/auth", authRouter);
    app.use("/api/v1/user", userRouter);
    app.use("/api/v1/task", taskRouter);

    app.listen(apiConfig.apiPort, () => {
        console.log(`Server is started on port ${apiConfig.apiPort}`);
    })
};



startApplication();