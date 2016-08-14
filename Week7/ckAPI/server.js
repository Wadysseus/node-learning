require('colors')

var express = require('express'),
	bodyParser = require('body-parser'),
	logger = require('morgan'),
	port = process.env.PORT || 8008,
	path  = require('path'),
	requestinator = require('request'),
	Routes = require('./routes')
	app   = express();


app.use( logger('dev') );

app.use(bodyParser.json(), bodyParser.urlencoded({ extended : true }));

app.use(express.static(path.join(__dirname, "public")));

app.set('publicHTML', __dirname + '/public/html');

// console.log(__dirname + '/public/html')

Routes(app);

app.listen(port, (err) => {
	if (err) {
		console.error('Your server asplode'.red, err);
	} else {
		console.log(`Server up on port: ${port}`.cyan);
		// console.log('Server up on port: ', port);
	}
})