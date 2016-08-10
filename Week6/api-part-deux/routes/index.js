var API = require('./pallet-api.js'); // controller file, an object full of route handlers

module.exports = (app) => {
	app.get('/', (req, res) => {
		res.sendFile('pallet.html', { root: app.get('publicHTML')});
	})

	app.get('/api/porkyman', API.catchOne);

	// app.get('/api/porkyman/evolution', API.evolution);

	// app.get('/api/porkyman', (req, res) => {
	// 	res.send()
	// });

}