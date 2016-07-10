var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

var port = 8080;
var db = "mongodb://localhost/meetingApp";

var routes = require("./routes/index");  // defining the permanent routes file

mongoose.connect(db);

// Setup View Engine using Swig
var swig = require("swig");
app.engine("html", swig.renderFile);

app.set("views", path.join(__dirname, "views")); // tells express where to look for our swig files
app.set("view engine", "html"); // need to define view engine

app.use(express.static(path.join(__dirname, "public"))); // set static path for our public directory

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use("/", routes); // need to define the root base of the url for routes

app.listen(port, function(){
	console.log("app listening on port " + port);
});