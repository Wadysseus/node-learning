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

// // Here we are pulling in the color data from the JSON file
// app.get('/api/colors', function(req, res){
// 	//1 - use REQUEST to grab Color info
// 	request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json',
// 	 	function(err, response, body){  
// 			// console.log(response.body);
// 			// console.log(typeof response.body)

// 			//data is the body, which ignores the status, statusText, config, etc.
// 			var data = response.body;
// 			//json parses this string response into an object, collection of arrays
// 			var json = JSON.parse(data);
// 			// we send the data at the end in its new object form
// 			res.send(json);
// 		})
// });

app.listen(port, (err)=>{
	if(err){
		console.error(err)
	} else {
		console.log('Server online, port: '.cyan + port);
	}
});

// Colors module: Emphasis: bold, italic, underline, inverse. Colors: yellow, cyan, white, magenta, green, red, grey, blue.