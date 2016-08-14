var API = require('./ck-API');

module.exports = (app) => {
	app.get('/', (req, res) => {
		res.sendFile('index.html', {root: app.get('publicHTML') });
	});

	app.get('/api/copStart', API.grabInfo);
}