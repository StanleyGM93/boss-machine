const express = require("express");
const minionsRouter = express.Router();
const dbHelperFunctions = require("../db");

minionsRouter
	.route("/")
	.get((req, res) => {
		const allMinions = dbHelperFunctions.getAllFromDatabase("minions");
		res.send(allMinions);
		console.log("minions get request received and sent");
	})
	.post((req, res) => {
		// res.send("minions post is working");
		const requestBody = req.body;
		console.log(req.body);
		const newMinion = dbHelperFunctions.addToDatabase("minion", requestBody);
		console.log(newMinion);
		res.send(newMinion);
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
