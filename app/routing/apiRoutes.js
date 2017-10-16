//LINKS TO DATA SOURCE
var tableData = require("../app/data/friends");

//ROUTING
module.exports = function (app) {
	
	app.get("/api/friends", function(req, res) {
		res.json(tableData);
	});

//POST REQUEST
app.post("/api/friends", function(res, req) {
	var reqScore = req.body.score;
	var scoreArray = [];
	var count = 0;
	var match = 0;

	for (var i = 0; i < tableData.length; i++) {
		var diff = 0;
		for (var j = 0; j < reqScore.length; j++) {
			diff +=(MATH.abs(parseInt(tableData[i].score[j]) - parseInt(reqScore[j])));
		}
		scoreArray.push(diff);
	}

    for(var i=0; i<scoreArray.length; i++){
      if(scoreArray[i] <= scoreArray[match]){
        match = i;
      }
    }


var bff = tableData[match];
res.json(bff);
tableData.push(req.body);
});
};