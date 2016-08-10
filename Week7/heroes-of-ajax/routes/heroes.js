// Heroes Controller

//Require the model so we can access the collection
var Hero = require('../models/hero');
// Hero => db.heroes 
// Hero.find() = db.heroes.find()

module.exports = {
    get : (req, res) => {
    	// Read
    	Hero.find({}, function(err, heroes){
    		res.json(heroes);
    	});
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