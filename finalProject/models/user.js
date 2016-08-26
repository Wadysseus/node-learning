var mongoose = require('mongoose');

// Create a model / schema
var userSchema = mongoose.Schema({
    googleid: 		{type : String},
    name:       	{type : String},
    created: {
        type: Number,
        default: () => Date.now()
    }
});

function findUser (userID){
	console.log('models/user - findUser fired')
	return users.filter(function(user){
		return user._id === id
	})
}


// var userExport = mongoose.model('user', userSchema);

// export the model
module.exports = {
user : mongoose.model('user', userSchema),
findUser : findUser,
}// Our entrypoint into the characters collection in the DB
// users