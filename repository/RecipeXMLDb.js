var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
		ID: Number
		FILENAME: String	
		VERSION: Number
		RECIPE_FILE: String	
		EXTRANET_URL: String
		STATUS: Number
		ERROR_MESSAGE: String
		MT_TESTCASES_ID: Number
		CREATED_BY: String
		CREATED_DATE: Date
		MODIFIED_BY: String
		MODIFIED_DATE: Date
		EXTRANET_FILE_NAME: String

});

var PUser = mongoose.model('MT_RECIPEXML', RecipeSchema);