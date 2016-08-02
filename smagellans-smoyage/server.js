var express = require('express');
var bodyParser = require('body-parser');

// Create an APP object
var app = express();

app.use(express.static(__dirname + '/public'));

// Get - '/'
app.get('/', function(req, res){
	// res.send('<h1> Hello Squirreld </h1>');
	console.log('ET phone home...', req.query);
	res.sendFile('index.html', {root : './public/html'});
});

// Listen for connections
app.listen(process.env.PORT || 8008, function(){
	console.log('Web server online, human.');
});