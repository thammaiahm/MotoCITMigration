/**
 * New node file
 */
var fs = require('fs');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var Schema = mongoose.Schema;
//var RdUser = mongoose.model('Readtext');
//var RdUser =require('../repository/TestCaseDb');
exports.showhomepage = function(req, res) {
	res.render('loadtestcase', {
		title : 'Akshatha'
	});
};

exports.uploadtestcase = function(req, res) {
	mongoose.connect('mongodb://localhost/RecipeGenerationDB', function (err, res) {
		if (err) { 
		console.log ('ERROR connecting to: ' + 'mongodb://localhost/RecipeGenerationDB' + '. ' + err);
		} else {
		console.log ('Succeeded connected to: ' + 'mongodb://localhost/RecipeGenerationDB');
		}
		});
		
		var form = req.form;
		 console.log(form);
		console.log(req.files.upload.name);
		console.log(req.files.upload.path);
		var fname = req.files.upload.name;

		fs.readFile(req.files.upload.path, 'utf8', function(err, data) {
			if (err) {
				return console.log(err);
			}
			console.log(data);
			
			
			var SchemaUser = new Schema({
				ID:	Number,
				NAME:	String,
				STATUS:	Number,	
				CREATED_BY:	String,
				MODIFIED_BY:	String,	
				CREATED_DATE:	Date,
				MODIFIED_DATE:	Date,	
				TESTCASE_NAME:	String
					});

			var RdUser = mongoose.model('mt_testcases', SchemaUser);
			var i=104;
			var testdoe = new RdUser({
				ID : i,
				NAME : fname,
				STATUS : 0,
				CREATED_BY : 'aksha',
				MODIFIED_BY : 'aksha',
				CREATED_DATE : new Date('Apr 18, 1991'),
				MODIFIED_DATE : new Date('May 04, 1915'),
				TESTCASE_NAME : data
			});
			i++;

			//Saving it to the database.  
			testdoe.save(function(err) {
				if (err)
					console.log('Error on save!')
			});

			res.render('index');
		
	});
	};


