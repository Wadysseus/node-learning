var express = require('express');
var bodyParser = require('body-parser');

// Create an APP object
var app = express();

// Instead of registering a GET route for EVERY file going to the client, 
	//we can use express to set up a static file server
// app.use's get called on EVERY request - used for 'mounting middleware'
	// Middleware - app.use gets run on every request, and it's above app.get, it'll get triggered 
		//before we finish out the request/response cycle/ Whatever we pass into use is called BEFORE 
		//that, so it creates middleware that gets run on every route.
app.use(express.static(__dirname + '/public')); //allows us to automatically register GET requests for every file in the public folder

app.use(bodyParser.urlencoded({extended : true})); // Turns url-encoded data into a readable object.

app.use(bodyParser.json());  //Will probably want both of these << ^^ in my apps.  Handles stringified JSON.

// Get - '/'
app.get('/', function(req, res){
	// res.send('<h1> Hello Squirreld </h1>');
	console.log('ET phone home...', req.query);
	res.sendFile('index.html', {root : './public/html'});
});

app.get('/', function(req, res){
	res.sendFile('about.html', {root : './public/html'});
});

app.post('/createuser', function(req,res){
	console.log('Creating a user...', req.body);
	res.send('Welcome back, ${req.body.username}!');
})

// Registering a GET route for every file the client needs is horribly inefficient, 
	// time-consuming, and error prone.
// app.get('/main.css', function(req, res){
// 	res.sendFile('main.css', {root : './public/css'});
// });
// app.get('/main2.css', function(req, res){
// 	res.sendFile('main2.css', {root : './public/css'});
// });


// Listen for connections
app.listen(process.env.PORT || 8008, function(){
	console.log('Web server online, human.');
});

// Remember to npm install -g nodemon