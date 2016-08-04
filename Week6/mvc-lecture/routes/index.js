// routes/index.js - can call it master route file

var API = require('./api')
	Dashboard = require('./dashboard');

console.log('API', API.)

// similar to the config of ui-router, ngRouter
// the Controller part of the MVC
module.exports = function (app) {
	app.get('/', function(req,res){
		res.send('Site homepage');
	});

	// http://localhost:8008
	app.get('/api', API.get);

	// http://localhost:8008/api/user?id=1  --example
	app.get('/api/user', API.user);

	// http://localhost:8008/api/users
	app.get('/api/users', API.users);

	// http://localhost:8008/api/dashboard
	app.get('/dashboard', Dashboard.home);

	// http://localhost:8008/api/dashboard/settings
	app.get('/dashboard', Dashboard.home);
}