var Users = require('../models/users')

module.exports = {
	//each property you see here is a a route-handler
	get: function(req, res){
		res.json({
			path: 'api-root',
			message: 'No action to take'
		})
	},
	user: function(req, res){
		var user = Users.fineOne(req.query.id);  //'id' could just as easily be 'monkey' here

		if (user ) {
			res.json (user) 
		} else {
			res.status(404).json({
				message: 'User not found'
			})
		}
	},
	users: function(req, res) {
		res.json({
			path: 'users'
		})
	}
}