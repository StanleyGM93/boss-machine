const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const apiRouter = require(__dirname + "/server/api");
app.use("/api", apiRouter);

if (!module.parent) {
	app.get("/", (req, res) => {
		res.sendFile(__dirname + "/index.html");
	});
	app.listen(PORT, () => {
		console.log(`Server is listening on port ${PORT}.`);
	});
}

module.exports = app;
