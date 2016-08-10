var mongoose = require('mongoose'); // pass by reference


//console.log(global) // Look at dese
//conosle.log(window)
// var monkay;  not global
// monkey = 'Monkey' // that would get placed into global.monkey

//console.log(require);  // console log all the things

// first param = name of model
// second param = json object describing DAS SCHEMA
var Car = mongoose.model('Car', {  //mongoose.model is a constructor
	make: String,
	model: ( type : String, required : true},
	year: Number,
	color: String,
	hyperDrive: Boolean,
	features: [String],
	timeAdded: { type: Number, 
		default: function(){
			return Date.now();
	}}	
})

module.exports = Car;