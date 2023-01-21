const express = require("express");
const apiRouter = express.Router();

const ideasRouter = require("./Routes/ideas");
const meetingsRouter = require("./Routes/meetings");
const minionsRouter = require("./Routes/minions");

apiRouter.use("/ideas", ideasRouter);
apiRouter.use("/meetings", meetingsRouter);
apiRouter.use("/minions", minionsRouter);

module.exports = apiRouter;
