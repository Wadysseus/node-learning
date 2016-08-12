var express         = require ('express');
var bodyParser      = require ('body-parser');
var logger          = require ('morgan');
var request         = require ('request');
var Routes 			= require('./routes');
var ejs 			= require('ejs');
var port 			= process.env.PORT || 8008;


var googleTranslate = require('google-translate')('AIzaSyCJtTINrVX16UdvTnPThJia82CoLNch9mQ');


//Create the express App object
var app = express();
var jsonParser = bodyParser.json();

// Mount middleware
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(logger('dev'));



//Routes
app.get('/', function(req, res){
	res.sendFile('./public/html/index.html', {
		root : './'
	});
});

// All other routes are coming from ./routes
Routes(app);


googleTranslate.translate('My name is Brandon', 'es', function(err, translation) {
  console.log(translation.translatedText);
  // =>  Mi nombre es Brandon
});

// Listen
app.listen(port, function(){
	console.log(`Server online, human. Port: ${port}`);
});