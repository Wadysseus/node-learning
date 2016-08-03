var express      = require('express');
var bodyParser   = require('body-parser');
var logger       = require('morgan');
var cookieParser = require('cookie-parser')
var app          = express();

// console.log(process.env.PORT)
// when you "load" middleware, it is called MOUNTING

//mounting middleware vertically, which means this will fire for EVERY SINGLE REQUEST
app.use(bodyParser.json())  // this attaches a POST payload to 'req.body'
app.use(bodyParser.urlencoded({ extended : true }))

// OR

// app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended : true }))  // lightweight way of doing this, since we'll never need this on GET

app.use( logger('dev') );

app.use(cookieParser());

app.use('/', function(req, res){
	console.log(req.cookies);
	console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=')
})

app.use(function(err, req, res, next){ //error-handler
	console.log('ERROR! ERROR!', err.stack)
	res.status(500),send({
		status: 500,
		message: 'Welcome to the Underground Smellroad. The Stankonia Express!'
	})
});

app.get('/', checkKey, function(req, res){  //often called the 'root' of the site //checkKey is mounted horizontally here
	res.send('<h1>Hello squirreld!</h1>');
})  

//will check key before allowing access to anything in the api folder
app.get('/api*', checkKey); //horizontally mounted middleware that matches a route pattern

app.get('/api/things', function(req, res) {
	res.send({
		data: 'stuff'
	})
})

// cookieParser.JSONCookie(str)

function checkKey(req, res, next) { //next, when called will fire the next middleware in the stack of middlewares
	if( req.query.key ){
	next() // MUST ALWAYS CALL THIS, or you will hang your server, frowny face
	}
	else {
		res.send("We don't take kindly to you folks 'round here.")
	}
}

// use POSTMAN to quickly test POST routes!
app.post('/', function(res, req){
	res.send();
})

// app.post('/', cookieParser(res, req){
// 	console.log('req.cookies');
// })

app.listen(process.env.PORT || 8008, ()=>{
	console.log('All systems nominal, human.')
})