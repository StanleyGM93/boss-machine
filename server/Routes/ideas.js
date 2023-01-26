const express = require("express");
const ideasRouter = express.Router();
const dbHelperFunctions = require("../db");
const checkMillionDollarIdea = require("../checkMillionDollarIdea");

ideasRouter
	.route("/")
	.get((req, res) => {
		const allIdeas = dbHelperFunctions.getAllFromDatabase("ideas");
		res.send(allIdeas);
	})
	.post(checkMillionDollarIdea, (req, res, next) => {
		const newIdea = dbHelperFunctions.addToDatabase("ideas", req.body);
		res.status(201).send(newIdea);
	});

ideasRouter.use("/:ideaId", (req, res, next) => {
	const singleIdea = dbHelperFunctions.getFromDatabaseById(
		"ideas",
		req.params.ideaId
	);
	if (!singleIdea) {
		return res.status(404).send("Idea was not found");
	}
	req.idea = singleIdea;
	next();
});

ideasRouter
	.route("/:ideaId")
	.get((req, res) => {
		res.send(req.idea);
	})
	.put((req, res) => {
		const requestBody = req.body;
		req.body.numWeeks = Number(req.body.numWeeks);
		req.body.weeklyRevenue = Number(req.body.weeklyRevenue);
		const updatedIdea = dbHelperFunctions.updateInstanceInDatabase(
			"ideas",
			requestBody
		);
		res.send(updatedIdea);
	})
	.delete((req, res) => {
		dbHelperFunctions.deleteFromDatabasebyId("ideas", req.idea.id);
		res.status(204).send("Idea has been removed");
	});

module.exports = ideasRouter;
