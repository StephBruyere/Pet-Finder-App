//LINKS TO DATA SOURCE
var path = require('path');
var friends = require("../data/friends");
//ROUTING
module.exports = function(app){
app.get("/api/friends", function(req,res){
		res.json(friends);
  });

//POST REQUEST
app.post("/api/friends", function(res, req) {
    var newScore = req.body.scores;
    var arr = [];
    var count = 0;
    var match = 0;

	for (var i = 0; i < friends.length; i++) {
		var diff = 0;
		for (var j = 0; j < newScore.length; j++) {
			diff +=(MATH.abs(parseInt(friends[i].scores[j]) - parseInt(newScore[j])));
		}
		arr.push(diff);
	}

    for(var i=0; i< arr.length; i++){
      if(arr[i] <= arr[match]){
        match = i;
      }
    }

var dog = friends[match];
res.json(dog);
friends.push(req.body);
});
};

console.log(friends);
console.log("test");