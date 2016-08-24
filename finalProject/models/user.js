var mongoose = require('mongoose');

// Create a model / schema
var userSchema = mongoose.Schema({
    googleid: 		{type : String},
    name:       	{type : String},
});

// export the model
module.exports = mongoose.model('user', userSchema); // Our entrypoint into the characters collection in the DB
// users