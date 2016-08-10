var Car = require('../models/car.js')

module.exports = {
	create: (req, res) => {
		if( !req.body.make ) {
			return res.status(400).json({
				message: 'Bad payload'
			})
		}

		var newCar = new Car(req.body);
	

	newCar.save( (err, data) => {
		if(err) {
			console.error('Things are not okay :('.red, err)
				res.status(500).send({
					message: 'Your car order asplode :) You suck :)'
				})
		} else {
			console.info("Heeeeere's data! -=-=- ", data);
			res.json(data)
		}
	});
},
	createFocus : () => {
		var newCar = new Car({
				make: 'Ford',
				model: 'Focus ST',
				year: 2014,
				color: 'Silver',
				hyperDrive: true,
				features: ['bluetooth', 'keyless-entry', 'turbo', 'spare-tire']
		}) 

	newCar.save( (err, data) => {
		if(err) {
			console.error('Things are not okay :('.red, err)
		} else {
			console.info("Heeeeere's data! -=-=- ", data);
		}
	});

	}
}