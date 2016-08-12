// Headquarters controller
// route handlers dealings with HQs

var HQ = require('../models/hq.js');

module.exports = {
	get : (req, res) => {
		if (req.params.id){
			//Find one
			HQ.findOne({ _id : req.params.id }, function(err, hqs){
				res.json(hq);
			})
		} else {
			// Find many
			HQ.find({}, function(err, hqs){
				res.json(hqs);
			});
		}
	},
	upsert : (req, res) => {
		if (req.params.id){
			//Update

		}else {
			//Create
			var newHQ = new HQ(req.body);
			newHQ.save(function(err,doc){
				res.json(doc);
			})
		}
	}
}