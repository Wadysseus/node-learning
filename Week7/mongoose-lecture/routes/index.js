var API = require('./api');

module.exports = (app) => {
	// app.get('/', (req, res) => {
	// 	res.send('Yes this is server')
	// });
	app.post('api/create', API.create)
	
}