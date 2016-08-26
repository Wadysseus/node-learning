var pcCtrl = require('./pcs');
var cCtrl  = require('./campaigns');
var uCtrl  = require('./users');
var flash  = require('connect-flash');

var passport = require('passport');

module.exports = (app) => {
	
    // Passport Routes
    app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] })); // Route that takes you to the google sign in page

    app.get('/auth/google/callback', 
    passport.authenticate('google', {   failWithError: true,
                                        failureFlash: true,
                                        failureRedirect: '/loginFail',
                                        
     }),  // 
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/profile'); //res.redirect('/profile/:id');
    }); // Where google redirects you when the user is done signing in

	app.get('/', (req,res) => {
		res.sendFile("index.html", {root: "./public/html"})
	});

	app.get('/login', (req,res) => {
		res.sendFile("login.html", {root: "./public/html"})
	});

    app.get('/logout', (req,res) => {
        console.log("logged out!");
        req.logout();
        res.redirect('/');
    });

	app.get('/about', (req,res) => {
		res.sendFile("about.html", {root: "./public/html"})
	});

	app.get('/profile', (req,res) => {
		res.sendFile("profileHome.html", {root: "./public/html"})
	});

    // app.get('/profile/:id', uCtrl.userID);

    app.get('/loginFail', function (req, res) {
        console.error('Flash console error', req.flash('info'));
        res.render('login', {messages : req.flash('info') });

    })



    // PC Routes
    app.get('/api/pcs', pcCtrl.get);
    app.post('/api/pcs', pcCtrl.upsert);
    
    // Campaign Routes
    app.get('/api/campaigns', cCtrl.get); // Find Many
    app.get('/api/campaigns/:id', cCtrl.get); // Find One
    app.post('/api/campaigns', cCtrl.upsert); // Create
    app.post('/api/campaigns/:id', cCtrl.upsert); // Update
    
    // User Routes
    app.get('/api/user/', uCtrl.get);
    app.get('/api/user/:id', uCtrl.get);
}

    // -=-===-=--=-===-=--=-===-=-DREW CODE TO FIGGER OUT?-=-===-=--=-===-=--=-===-=-

        // app.isAuthenticated = function(req, res, next){
        // // If the current user is logged in...
        // if(req.isAuthenticated()){
        //     return next();
        // }
        // // If not, redirect to login
        // console.log('ur google asplode')
        // res.redirect('/login');
        // }

        // app.get('/profile', app.isAuthenticated, function(req, res){
        // res.sendFile('/profileHome.html', {root: './hidden'})
        // })

    // -=-===-=--=-===-=--=-===-=-END OF DREW CODE-=-===-=--=-===-=--=-===-=-