var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

exports.showRecipePage = function (req, res) {
	MongoClient.connect("mongodb://localhost/RecipeGenerationDB", function(err, db) {

		if(err) { return console.dir(err); }

		console.log("Connected to db");
		var collection = db.collection('mt_testcases');
										
		console.log("Data selected from DB for drop down");
		collection.find({STATUS:0}).toArray(function(err, items) {
			console.log("items : ",items);
			//res.render('home', { items:items});
			
			
		var stream = collection.find({STATUS:0}).stream();
		 stream.on("data", function(item) {
			 console.log("item : ",item.TESTCASE_NAME);
			 res.render('home',{ item: items , testCaseName: item.TESTCASE_NAME});
			// res.render('test', { testCaseName: item});
		 });
		 stream.on("end", function() {}); 
		});
							
		});
};


