var mongoose = require ('mongoose');

var hqSchema = new Schema {
	name : {type : String},
	amenities : {type : String},
	butler : {type : Boolean},
	moatType : {type : String},
	// heroes : [
		// {type: mongoose.Schema.ObjectId, ref : 'Hero'}]
}


//first argument is how mongoose interprets collection
//second argument is what I'm actually passing in
//third argument allows me to force the collection name
module.exports = mongoose.model('HQ', hqSchema);