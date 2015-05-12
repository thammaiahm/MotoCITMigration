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
//update to testcase- Status
	
	var form = req.form;
	// console.log(req.files.upfilename);
	console.log(req.files.upload.name);
	console.log(req.files.upload.path);
	var fname = req.files.upload.name;

	fs.readFile(req.files.upload.path, 'utf8', function(err, data) {
		if (err) {
			return console.log(err);
		}
		console.log(data);
		
	MongoClient.connect("mongodb://localhost/RecipeGenerationDB", function(err, db) {
		if(err) { return console.dir(err); }
		var collections = db.collection('mt_testcases');
		collections.update({STATUS:1}, {$set:{STATUS:2}}, {w:1, multi: true}, function(err, result) {});
		collections.update({STATUS:0}, {$set:{STATUS:1}}, {w:1, multi: true}, function(err, result) {});
	
		//insert to testcases
		var testcasedocument = {
				ID : 103,
				NAME : 'testcase12',
				STATUS : 0,
				CREATED_BY : 'aksha',
				MODIFIED_BY : 'aksha',
				CREATED_DATE : new Date(),
				MODIFIED_DATE : new Date(),
				TESTCASE_NAME : data
			};
		collections.insert(testcasedocument, {w: 1}, function(err, records){
		 // console.log("Record added as "+records[0]._id);
	
		collections.save(testcasedocument, {w:1}, function(err, records){});
		
		});

	});
	});
	
	res.render('index');	
	};


