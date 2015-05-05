var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	ID:	Number,
	NAME:	String,
	STATUS:	Number,	
	CREATED_BY:	String,
	MODIFIED_BY:	String,	
	CREATED_DATE:	Date,
	MODIFIED_DATE:	Date,	
	TESTCASE_NAME:	String
	 
	});

	var PUser = mongoose.model('MT_TESTCASES', userSchema);
	
	/*//Creating one user.
	var johndoe = new PUser ({
		ID:	103,
		NAME: 'Testing3',
		STATUS:	0,	
		CREATED_BY:	'chethana',
		MODIFIED_BY: 'chethana',	
		CREATED_DATE: new Date('Apr 18, 1991'),
		MODIFIED_DATE: new Date('May 04, 1915'),	
		TESTCASE_NAME:	'TC1,TC2,TC3,TC4'
	});*/