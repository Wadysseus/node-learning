// Users Controller

// Require the model so we can access the collection
var User = require('../models/user');

module.exports = {
    get : (req, res) => {
        // Read
        User.find({})
            .populate('campaigns') // Property name of a PC doc we want to populate
            .exec(function(err, users){
                res.json(users);
            }); // exec gives us a place to pass in the callback function find used to take.  Like a 'then' method for mongoose
    },

    upsert : (req, res) =>{
        // Create / Update
        if(req.params.id){
            // Update existing document
        }
        else {
            // No id in the url, create a new document
            var newUser = new User(req.body);

            // Save character to DB
            newUser.save(function(err, user){
                if(err){
                    return res.json(err);
                }
                res.json(user);
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