const express = require("express");
const minionsRouter = express.Router();

minionsRouter
	.route("/minions")
	.get((req, res) => {
		res.send("get request received");
	})
	.post((req, res) => {
		res.send("post request received");
	});

module.exports = minionsRouter;
