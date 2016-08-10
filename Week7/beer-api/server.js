require('colors');

var express = require('express'),
	parser = require('body-parser'),
	logger = require('morgan'),
	port = process.env.PORT || 8008,
	path = require('path'), //needed more for Windows machines than Mac/Linux
	ejs = require('ejs'),
	Routes = require('./routes'),
	mongoose = require('mongoose'),
	app = express(0);

mongoose.connect('mongodb://localhost/beer', (err) => {
	if(err) {
		console.error("Where's the beer? :(", err);
	} else {
		console.info('Beer run!'.green)
	}
})

app.use(logger('dev'));

	app.set('view engine', 'html');  // private view files
	app.engine('html', ejs.renderFile); //When calling res.render, it will know which templating function to use for HTML files

	// By default, express expects that I will put my templates in the views folder. If I want to switch that:
	// app.set('views', path); // DO DIS

	app.use(express.static(path.join(__dirname, 'public')))

// vertically mounting body-parser is good when you know for a fact that you are going to use more verbs (i.e.- be more RESTful) like PUT / PATCH / DELETE / ETC.
// because 'req.body' is where your payload will live on those types of routes
app.use(parser.json());
app.use(parser.urlencoded(extended: true));

Routes(app);

app.listen(port, (err) => {
	if (err){
		console.error('Your server asplode', err).yellow;
		process.exit(1);
	} else {
		console.log(`I don't wanna sound like a queer or nothin, but this server's running on ${port}`.cyan);
	}

})