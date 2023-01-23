const express = require("express");
const meetingsRouter = express.Router();

meetingsRouter
	.route("/")
	.get((req, res) => {
		res.send("meetings get working");
	})
	.post((req, res) => {
		res.send("post request working");
	})
	.delete((req, res) => {
		res.send("delete meetings working");
	});

module.exports = meetingsRouter;
