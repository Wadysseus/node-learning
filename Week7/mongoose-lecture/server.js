require('colors');

var express    = require('express'),
	logger     = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose   = require('mongoose'),
	Routes     = require('./routes'),
	path = require('path'),
	port       = process.env.PORT || 8008,
	app        = express();

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongdb://localhost/heroes-of-ajax', (error) => {
	if(error) {
		console.error('MongoDB connection error. You have fucked up, human.'.red);
		process.exit(1);  // exits a node application, anything other than 0 is considered an error
	} else {
		console.log(`Systems initialized, Mongoose is now online and ready to strike.`)
	}
});

app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended : true }));

app.listen(port, (error) => {
	if(error) {
		console.error('Port listening error. You have fucked up, human.'.red);
		process.exit(1);  // exits a node application, anything other than 0 is considered an error
	} else {
		console.log(`Systems initializing. Server running on ${port}, human.`.cyan)
	}
});