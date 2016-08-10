var express       = require('express'),
	bodyParser    = require('body-parser'),
	logger        = require('morgan'),
	requestinator = require('request'),
	port          = process.env.PORT || 8008,
	Routes        = require('./routes'),
	path          = require('path'), //built-in node module for resolving paths
	app           = express();

app.use (logger('dev'));

app.post('*', bodyParser.json(), bodyParser.urlencoded ({ extended: true})); // mount bodyParser horizontally across all post requests

app.use(express.static(path.join(__dirname,'public')));

app.set('publicHTML', __dirname+'/public/html');

// make sure you mount routes BELOW veritcally mounted middleware
Routes(app);

app.listen(port, (error)=>{
	if ( error ) {
		console.error('Gameover man! Gameover!')
	} else {
		console.log(`All systems functional, human. Port: ${port}`) // interpolation using template literals
	}
})