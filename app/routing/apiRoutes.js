//LINKS TO DATA SOURCE
var path = require('path');
var petList = require("../data/friends.js");

//ROUTING
module.exports = function(app){
app.get("/api/friends", function(req,res){
		res.json(petList);
  });

//POST REQUEST
app.post("/api/friends", function(res, req) {
    var newScore = req.body.scores;
    console.log(res.body.scores);
    var arr = [];
    var count = 0;
    var match = 0;

	for (var i = 0; i < petList.length; i++) {
		var diff = 0;
		for (var j = 0; j < newScore.length; j++) {
			diff +=(MATH.abs(parseInt(petList[i].scores[j]) - parseInt(newScore[j])));
		}
		arr.push(diff);
	}

    for(var i=0; i< arr.length; i++){
      if(arr[i] <= arr[match]){
        match = i;
      }
    }

var dog = petList[match];
res.json(dog);
petList.push(req.body);
});
};
