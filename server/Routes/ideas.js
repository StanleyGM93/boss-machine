const express = require("express");
const ideasRouter = express.Router();

ideasRouter
	.route("/")
	.get((req, res) => {
		res.send("ideasRouter is working");
	})
	.post((req, res) => {
		res.send("ideas post request is working");
	});

ideasRouter
	.route("/:ideaId")
	.get((req, res) => {
		res.send("get ideaId working");
	})
	.put((req, res) => {
		res.send("ideaId put request working");
	})
	.delete((req, res) => {
		res.send("delete ideaId working");
	});
module.exports = ideasRouter;
