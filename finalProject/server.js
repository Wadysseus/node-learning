require('colors');

var express = require('express'),
	app = express(),
	logger = require('morgan'),
	mongoose = require('mongoose')
	bodyParser = require('body-parser'),
	port = process.env.PORT || 8008,
	ejs = require('ejs'),
	Routes = require('./routes/index.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

mongoose.connect('mongodb://localhost/crAPI', (error) => {
    if(error) {
        console.error('Oh no, could not start mongoose!', error);
        process.exit(1); // exits a node application, anything other than 0 is considered an error
    } else {
        console.log('Mongoose started successfully.'.blue);
    }
});

Routes(app);

app.listen(port, (err)=>{
	if(err){
		console.error(err)
	} else {
		console.log('Server online, port: '.cyan + port);
	}
});

// Colors module: Emphasis: bold, italic, underline, inverse. Colors: yellow, cyan, white, magenta, green, red, grey, blue.