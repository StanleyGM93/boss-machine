const express = require("express");
const ideasRouter = require("./ideas");
const minionsRouter = express.Router();

minionsRouter
	.route("/")
	.get((req, res) => {
		res.send("minions route is working");
	})
	.post((req, res) => {
		res.send("minions post is working");
	});

minionsRouter
	.route("/:minionId")
	.get((req, res) => {
		res.send("minionId get is working");
	})
	.put((req, res) => {
		res.send("minionId put is working");
	})
	.delete((req, res) => {
		res.send("minionId delete is working");
	});
module.exports = minionsRouter;
