var RecipeGeneration = require('../model/RecipeGeneration');

module.exports = function (app) {
	
	app.get('/home',RecipeGeneration.showRecipePage);
		
};