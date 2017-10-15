
//DEPENDENCIES
var path = require("path");

//ROUTING

//LINK TO SURVEY
module.exports = function(app) {

	app.get("/survey", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/survey"));
	});

//LINK HOME
	app.get("/home", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/home"));
	}

//NO MATCHING ROUTES RETURNS HOME
	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "../"));
	}
}
