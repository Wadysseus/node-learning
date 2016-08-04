var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    path = require('path'),
    port = process.env.PORT;

	app.use(require('morgan')('dev'));

	// just in case: for Windows
	app.use(express.static(path.join(__dirname, 'public')));

app.post('*', bodyParser.json(), bodyParser,urlencode({extend: true}));

//in Node, when you use 'require', you don't need extensions, and you don't even need the file name if it has an index.js
//requiring a folder with index.js will automatically load index.js  
//similar to angular.module('myModule').controller('controllerName', controllerNamedFn) == require('./routes')(controllerNamedFn)
require('./routes')(app)

app.listen(process.env.PORT || 8008, function() {
	console.log('MVC server online, human. Port: ${PORT}');
});