var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var Schema = mongoose.Schema;

exports.showRecipePage = function (req, res) {
	MongoClient.connect("mongodb://localhost/RecipeGenerationDB", function(err, db) {

		if(err) { return console.dir(err); }

		console.log("Connected to db");
		var collection = db.collection('mt_testcases');
										
		console.log("Data selected from DB for drop down");
		collection.find({STATUS:0}).toArray(function(err, items) {
			console.log("items : ",items);
						
		var stream = collection.find({STATUS:0}).stream();
		 stream.on("data", function(item) {
			 console.log("item : ",item.TESTCASE_NAME);
			 res.render('home',{ item: items , testCaseName: item.TESTCASE_NAME});
			
		 });
		 stream.on("end", function() {}); 
		});
	});
	
};

exports.loadTestcases = function (req, res) {
	MongoClient.connect("mongodb://localhost/RecipeGenerationDB", function(err, dbs) {

	if(err) { return console.dir(err); }

	console.log("Connected to db in post");
			
	var formData = req.query.id;
	var id = parseInt(formData);
	console.log("MT_RECIPEXML_NEW_ID:"+id);
		
	var collection2 = dbs.collection('mt_recipe_steps');
		
	collection2.find({MT_RECIPEXML_NEW_ID:id}).toArray(function(err, itemsteps) {
	console.log("itemstep : ",itemsteps);	
				
	res.send(itemsteps);
			
			});
	 
	});
};

exports.saveRecipe = function(req, res){
	var form = req.form;
	console.log("form details" +form);
	mongoose.connect('mongodb://localhost/RecipeGenerationDB', function (err, res) {
		if (err) { 
		console.log ('ERROR connecting to: ' + 'mongodb://localhost/RecipeGenerationDB' + '. ' + err);
		} else {
		console.log ('Succeeded connected to: ' + 'mongodb://localhost/RecipeGenerationDB');
		}
		});
	
	// recipexml table insert new recipe file name
	var RecipeSchema = new Schema({
		ID: Number,
		FILENAME: String,	
		VERSION: Number,
		RECIPE_FILE: String,	
		EXTRANET_URL: String,
		STATUS: Number,
		ERROR_MESSAGE: String,
		MT_TESTCASES_ID: Number,
		CREATED_BY: String,
		CREATED_DATE: Date,
		MODIFIED_BY: String,
		MODIFIED_DATE: Date,
		EXTRANET_FILE_NAME: String

	});

	var XUser = mongoose.model('MT_RECIPEXML', RecipeSchema);
		var recipeFileName =req.query.recipeFileName;
		console.log("recipeFileName"+ recipeFileName);
		var xmldoe = new XUser ({
				ID: '301',
				FILENAME:recipeFileName,	
				VERSION: '0',
				RECIPE_FILE: 'recipefile.xml',//steps details	
				EXTRANET_URL: 'https://rsdsecure-test.motorola.com/download/testing12.txt',
				STATUS: '0',
				ERROR_MESSAGE: '',
				MT_TESTCASES_ID: 103,
				CREATED_BY: 'aksha',
				CREATED_DATE: new Date('May 18, 1991'),
				MODIFIED_BY: 'aksha',
				MODIFIED_DATE: new Date('Juna 18, 1991'),
				EXTRANET_FILE_NAME:'testing12'
				});

				xmldoe.save(function (err) {if (err) console.log ('Error on save!')});
				
				console.log("entered save recipe");

				var generatedJsonString = req.query.recipeString;
				console.log("generateJsonString : " + generatedJsonString);
				
				var recipes = JSON.parse(generatedJsonString);
				console.log("recipies"+ recipes);
				

				
	// steps table insert the recipes details as each record based on the test cases			

	var RecipeStepsSchema = new Schema({
		MT_RECIPEXML_NEW_ID:	Number,
		STEP_Number:	Number,
		STEP_DETAILS:	String,
		FRONTEND:	String,
		BACKEND:	String,
		AUDIO_ALERT:	String,
		BATTERY:	String,
		BLUETOOTH:	String,	
		CAMERA:	String,
		CHARGING:	String,
		DISPLAY_KEYBORED:	String,
		MEMORY_CARD:	String,
		POWER_ON_OFF:	String,
		SIM_CARD:	String,
		WIFI: String,
		NO_COMPLAINT:	String
		});
	
	var SUser = mongoose.model('MT_RECIPE_STEPS', RecipeStepsSchema);
	console.log("req.query.TClength"+ req.query.TClength);		  
	for(var i=0; i<req.query.TClength; i++)
	{

	var stepsdoe = new SUser ({
		MT_RECIPEXML_NEW_ID:'1001',
		STEP_Number:'0',
		STEP_DETAILS:'testcase12',	
		FRONTEND: recipes[i].frontEnd,
		BACKEND:	recipes[i].backEnd,
		AUDIO_ALERT: recipes[i].complaint,
		BATTERY:	recipes[i].audioAlert,
		BLUETOOTH:	recipes[i].battery,	
		CAMERA:	recipes[i].bluetooth,
		CHARGING:	recipes[i].camera,
		DISPLAY_KEYBORED:	recipes[i].charging,
		MEMORY_CARD:	recipes[i].displayKeypad,
		POWER_ON_OFF:	recipes[i].memoryCard,
		SIM_CARD:	recipes[i].powerOnOf,
		WIFI:recipes[i].simCard,
		NO_COMPLAINT:recipes[i].wifi
		});

	stepsdoe.save(function (err) {if (err) console.log ('Error on save!')});
	
	
	}
	
	res.end();

	
};
