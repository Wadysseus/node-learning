// Requires \\
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
// Create Express App Object \\
var app = express();

var fileContents = fs.readFileSync('data.txt', function(res){
	res.header('Content-Type', 'text/html');
});

// res.header('Content-Type', 'text/html');

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.send('Hello')
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})