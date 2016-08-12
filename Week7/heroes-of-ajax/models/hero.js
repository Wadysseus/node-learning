var mongoose = require('mongoose'); // creates a &pointer!

// Create a model
var heroSchema = mongoose.Schema({
	name       : {type: String},
	powers     : {type: Array, default: []},
	weaknesses : {type: Array, default: []},
	HQ         : {
		type : mongoose.Schema.ObjectId,
		ref  : 'HQ'  // Collection name as MONGOOSE understands it (first arg to mongoose.model)
	},
	// sidekick   : {
	// 	name : {type : String},
	// 	caped: {type : Boolean}
	// },
	masked     : {type: Boolean, default: false}, 
	origin     : {type: String}
});

// export the model
// first argument is the name mongo understands, second argument is our model, third argument FORCES a name for the collection 
module.exports = mongoose.model('Hero', heroSchema, 'heroes'); // our entrypoint into the heroes collection in the DB

var mongoose = require('mongoose');