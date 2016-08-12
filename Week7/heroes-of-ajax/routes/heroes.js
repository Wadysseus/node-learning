// Heroes Controller

//Require the model so we can access the collection
var Hero = require('../models/hero');
// Hero => db.heroes 
// Hero.find() = db.heroes.find()

module.exports = {
    get : (req, res) => {
    	// Read

        //Without poulate
    	// Hero.find({}, function(err, heroes){
    	// 	res.json(heroes);
    	// });

        //With populate
        Hero.find({})
            .populate('headquarters') // property name of a Hero doc we want to populate  -- if I wanted another property, do .populate('headquarters sidekick')
            .exec(function(err, heroes){
                res.json(heroes);
            }); //exec gives us a place to pass in the callback function find used to take. Like a 'then' method for mongoose.
    },
    // /api/heroes
    // /api/heroes/id
    // /api/v2/evolution-chain/:id
    upsert : (req, res) => {
    	// Updates or creates depending on context - works for C and U
    	if(req.params.id){
    		//Update existing document

    	} else {
    		// No id in the url, create a new document
    		var newHero = new Hero(req.body);
    		// Save hero to DB
    		newHero.save(function (err, hero) {
    			if (err) {
    				return res.json(err);
    			}
    			res.json(hero);
    		});
    	}
    },
    remove : (req, res) => {
    	// BUHLEET
    }
}

// Our controller file will at least perform CRUD operations
// C - Create - inserting docs into db
// R - Read - querying, pulling things out of db
// U - Update - modifying an existing document
// D - Delete - removes a document