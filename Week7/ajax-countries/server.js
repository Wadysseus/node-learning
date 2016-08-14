require('colors');

/**
 * 1. touch server.js
 * 2. npm init
 * 3. npm i --save express mongoose morgan body-parser
 * 4. pull in deps, init a canonical express app
 * 5. initialize mongoose
 */

var express    = require('express'),
    logger     = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose'),
    Routes     = require('./routes'),
    path       = require('path'),
    port       = process.env.PORT || 8008,
    countries  = require('./models/countriesModel.json'),
    ejs        = require('ejs'),
    app        = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'html'); // private view files
app.engine('html', ejs.renderFile) // res.render

// make sure you have mongod running!
// connection string: 'mongodb://localhost/<db-name>'
mongoose.connect('mongodb://localhost/countryList', (err) => {
    if(err) {
        console.error('Oh no, could not start mongoose!'.red, err);
        process.exit(1); // exits a node application, anything other than 0 is considered an error
    } else {
        console.log('Mongoose started successfully.'.cyan);
    }
});

app.get('/countries', function(req, res){
    res.send(countries)
})

Routes(app);

app.listen(port, (err) => {
    if(err){
        console.error('Server is broke'.red);
        process.exit(1);
    } else {
        console.log(`Systems online, human. Port: ${port}`.cyan)
    }
})