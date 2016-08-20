var express = require('express')
var app = express()
app.use(express.static(__dirname + '/public'));

/** Express Session Setup **/
var session = require('express-session')
app.sessionMiddleware = session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
})
app.use(app.sessionMiddleware)

/** End Express Session Setup **/


/** Body Parser Setup **/
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/** End Body Parser Setup **/

/** Database setup **/
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/jail')

var userSchema = mongoose.Schema({
    username : { type: String, required: true, unique: true },
    password : { type: String, required: true },
    role     : { type: String, required: true },
});
var User = mongoose.model('user', userSchema);
/** End database setup **/


/** Passport Config **/
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

// When someone tries to log in to our site, how do we determine that they are who they say they are?
var bcrypt = require('bcryptjs')
passport.use(new LocalStrategy(
    // write local strategy here
));

app.isAuthenticated = function(req, res, next){
    // If the current user is logged in, allow them through
    // else, kick them out to the login page.

}

app.post('/signup', function(req, res){
    bcrypt.genSalt(11, function(error, salt){
        bcrypt.hash(req.body.password, salt, function(hashError, hash){
            var newUser = new User({
                username : req.body.username,
                role     : req.body.role,
                password : hash,
            });
            newUser.save(function(saveErr, user){
                if ( saveErr ) { res.send({ err:saveErr }) }
                else {
                    req.login(user, function(loginErr){
                        if ( loginErr ) { res.send({ err:loginErr }) }
                        else { res.send({success: 'success'}) }
                    })
                }
            })

        })
    })
})

app.post('/login', function(req, res, next){
    // use your local strategy here.
})

app.get('/', function(req, res){
    res.sendFile('/html/login.html', {root: './public'})
})
app.get('/api/me', function(req,res){
    // send down the logged-in user.
})
app.get('/jail', function(req, res){
    res.sendFile('/html/jail.html', {root: './public'})
})
app.get('/lobby', function(req, res){
    res.sendFile('/html/lobby.html', {root: './public'})
})
app.get('/visitors-lounge', function(req, res){
    res.sendFile('/html/visitors-lounge.html', {root: './public'})
})
app.get('/cafeteria', function(req, res){
    res.sendFile('/html/cafeteria.html', {root: './public'})
})
app.get('/wardens-office', function(req, res){
    res.sendFile('/html/wardens-office.html', {root: './public'})
})
app.get('/cell-e', function(req, res){
    res.sendFile('/html/cell-e.html', {root: './public'})
})
app.get('/cell-m', function(req, res){
    res.sendFile('/html/cell-m.html', {root: './public'})
})


app.listen(3000)
