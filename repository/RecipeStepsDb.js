var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeStepsSchema = new Schema({
	MT_RECIPEXML_NEW_ID:	Number,
	STEP_Number:	Number,
	STEP_DETAILS:	String,
	FRONTEND:	Number,
	BACKEND:	Number,
	AUDIO_ALERT:	Number,
	BATTERY:	Number,
	BLUETOOTH:	Number,	
	CAMERA:	Number,
	CHARGING:	Number,
	DISPLAY_KEYBORED:	Number,
	MEMORY_CARD:	Number,
	POWER_ON_OFF:	Number,
	SIM_CARD:	Number,
	WIFI: Number,
	NO_COMPLAINT:	Number

	});

var PUser = mongoose.model('MT_RECIPE_STEPS', RecipeStepsSchema);
/*//Creating one user.
var johndoe = new PUser ({
	MT_RECIPEXML_NEW_ID:	103,
	STEP_Number:	1,
	STEP_DETAILS:	'TestCase622',
	FRONTEND:	1,
	BACKEND:	1,
	AUDIO_ALERT:	0,
	BATTERY:	0,
	BLUETOOTH:	1,	
	CAMERA:	0,
	CHARGING:	0,
	DISPLAY_KEYBORED:	1,
	MEMORY_CARD:	0,
	POWER_ON_OFF:	1,
	SIM_CARD:	1,
	WIFI: 1,
	NO_COMPLAINT:	0
	
});
*/

	var PUser = mongoose.model('MT_TESTCASES', userSchema);