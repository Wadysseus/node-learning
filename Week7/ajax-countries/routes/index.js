var API = require('./api'),  //not using an api file, so I need to do this differently
	render = require('./render');

module.exports = (app) => {
    // app.get('/', render.root);
    // app.get('/dashboard', render.dashboard);
    app.get('/countries', API.read);
}