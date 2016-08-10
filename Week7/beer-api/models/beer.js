var Beer = require('mongoose');
	Schema = mongoose.Schema,
	BeerSchema = new Schema('Beer', {
	name: '',
	IBUs: Number,
	ingredients: [String],
	price: Number,
	calories: Number,
	fluidOZ: Number
})

// Beer.pre('save', ()=> {

// })

module.exports = mongoose.model('Beer', BeerSchema);