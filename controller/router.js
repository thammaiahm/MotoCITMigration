var RecipeGeneration = require('../model/RecipeGeneration');
var read = require('../model/Read');

module.exports = function (app) {
	
	app.get('/loadtestcase', read.showhomepage);
	app.post('/uploadtestcase', read.uploadtestcase);
	app.get('/RecipeGeneration',RecipeGeneration.showRecipePage);
	app.get('/saveRecipe', RecipeGeneration.saveRecipe);
	app.post('/RESTWSRecipeGeneration',RecipeGeneration.loadTestcases);
		
};