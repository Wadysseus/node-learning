var express    = require('express'),
	request    = require('request'),
	logger     = require('morgan'),
	port       = process.env.PORT || 8008,
	bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public'));

// Get - '/'
app.get('/', function(req, res){
	// res.send('<h1> Hello Squirreld </h1>');
	console.log('ET phone home...', req.query);
	res.sendFile('main.html', {root : './public/html'});
});

app.get('/success', function (req, res) {
	res.send('<h1>Great success!</h1>');
})

app.post('/formsubmit', (req, res) => {
	// res.send(res.query)
	res.redirect('/success')
})



// Listen for connections
app.listen(port, function(){
	console.log(`Web server online, human. Port: ${port}`);
});