//LINKS TO DATA SOURCE
var tableData = require(../app/data/friends);

//ROUTING
module.exports = function (app) {
	
	app.get("/api/friends", function(req, res) {
		res.json(tableData);
	});


//POST REQUEST

app.post("/api/friends", function(res, req) {
	tableData.push(req.body);
	res.json(false);
});

};