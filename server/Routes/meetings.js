const express = require("express");
const meetingsRouter = express.Router();
const dbHelperFunctions = require("../db");

meetingsRouter
	.route("/")
	.get((req, res) => {
		const allMeetings = dbHelperFunctions.getAllFromDatabase("meetings");
		res.send(allMeetings);
	})
	.post((req, res) => {
		const newMeeting = dbHelperFunctions.createMeeting();
		res.status(201).send(newMeeting);
	})
	.delete((req, res) => {
		dbHelperFunctions.deleteAllFromDatabase("meetings");
		res.status(204).send("All meetings have been removed");
	});

module.exports = meetingsRouter;
