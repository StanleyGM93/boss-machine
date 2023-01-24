const express = require("express");
const minionsRouter = express.Router();
const dbHelperFunctions = require("../db");

minionsRouter
	.route("/")
	.get((req, res) => {
		const allMinions = dbHelperFunctions.getAllFromDatabase("minions");
		res.send(allMinions);
	})
	.post((req, res) => {
		const requestBody = req.body;
		requestBody.salary = Number(requestBody.salary);
		const newMinion = dbHelperFunctions.addToDatabase("minions", requestBody);
		res.send(newMinion);
	});

minionsRouter.use("/:minionId", (req, res, next) => {
	const singleMinion = dbHelperFunctions.getFromDatabaseById(
		"minions",
		req.params.minionId
	);
	if (!singleMinion) {
		return res.status(404).send("Minion with that Id does not exist");
	}
	req.minion = singleMinion;
	next();
});

minionsRouter
	.route("/:minionId")
	.get((req, res) => {
		res.send(req.minion);
	})
	.put((req, res) => {
		const requestBody = req.body;
		requestBody.salary = Number(requestBody.salary);
		req.minion = requestBody;
		res.send(req.minion);
	})
	.delete((req, res) => {
		req.minion = null;
		res.status(204).send("Minion has been removed");
	});
module.exports = minionsRouter;
