var express         = require ('express');
var bodyParser      = require ('body-parser');
var logger          = require ('morgan');
var request         = require ('request');
var Routes 			= require('./routes');
// var googleTranslate = require('google-translate')(apiKey);
var ejs 			= require('ejs');
var port 			= process.env.PORT || 8008;

//Create the express App object
var app = express();
var jsonParser = bodyParser.json();

// Mount middleware
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended :true }));
app.use(logger('dev'));

//Routes
app.get('/', function(req, res){
	res.sendFile('./public/html/index.html', {
		root : './'
	});
});



// googleTranslate.translate(strings, source, target, 	
// 	function(err, response, body){  
// 			// console.log(response.body);
// 			// console.log(typeof response.body)

// 			//data is the body, which ignores the status, statusText, config, etc.
// 			var data = response.body;
// 			//json parses this string response into an object, collection of arrays
// 			var json = JSON.parse(data);
// 			// we send the data at the end in its new object form
// 			res.send(json);
// 		})
// 	// res.send(colorData)
// });




// Listen
app.listen(port, function(){
	console.log(`Server online, human. Port: ${port}`);
});