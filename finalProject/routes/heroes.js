// Heroes Controller

// Require the model so we can access the collection
var Hero = require('../models/hero');

module.exports = {
    get : (req, res) => {
        // Read
        Hero.find({})
            .populate('campaigns') // Property name of a Hero doc we want to populate
            .exec(function(err, heroes){
                res.json(heroes);
            }); // exec gives us a place to pass in the callback function find used to take.  Like a 'then' method for mongoose
    },

    upsert : (req, res) =>{
        // Create / Update
        if(req.params.id){
            // Update existing document
        }
        else {
            // No id in the url, create a new document
            var newHero = new Hero(req.body);

            // Save hero to DB
            newHero.save(function(err, hero){
                if(err){
                    return res.json(err);
                }
                res.json(hero);
            });
        }

    },

    remove : (req, res) =>{
        // Delete
    }

}


// Our controller file will, at least, perform CRUD operations
// C - Create - inserting documents into the db
// R - Read   - querying, pulling things out of the db
// U - Update - modifying an existing document
// D - Delete - removes a document