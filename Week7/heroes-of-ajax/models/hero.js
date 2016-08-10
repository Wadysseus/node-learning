var mongoose = require('mongoose'); // creates a &pointer!

// Create a model
var heroSchema = mongoose.Schema({
	name       : {type: String},
	powers     : {type: Array, default: []},
	weaknesses : {type: Array, default: []},
	// HQ         : {type: String},
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