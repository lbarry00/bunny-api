	var express = require("express"),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require("mongoose"),
	Bunny = require("./api/models/bunnyModel"),
	bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/bunnyRoutes');
routes(app);

app.listen(port);

console.log("Bunny API started and listening on port " + port);
