var express       = require ('express');
var bodyParser    = require ('body-parser');
var logger        = require ('morgan');
var request       = require ('request');

//Create the express App object
var app = express();
var jsonParser = bodyParser.json();

// Mount middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended :true }));
app.use(logger('dev'));

//Routes
app.get('/', function(req, res){
	res.sendFile('main.html', {
		root : './public/html'
	});
});

// Here we are pulling in the color data from the JSON file
app.get('/api/colors', function(req, res){
	//1 - use REQUEST to grab Color info
	request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json'
	, 	function(err, response, body){  
			// console.log(response.body);
			// console.log(typeof response.body)

			//data is the body, which ignores the status, statusText, config, etc.
			var data = response.body;
			//json parses this string response into an object, collection of arrays
			var json = JSON.parse(data);
			// we send the data at the end in its new object form
			res.send(json);
		})
	// res.send(colorData)
});




// Listen

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log(`Server online, human. Port: ${port}`);
})