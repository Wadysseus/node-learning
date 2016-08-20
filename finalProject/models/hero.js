var mongoose = require('mongoose');

// Create a model / schema
var heroSchema = mongoose.Schema({
    name:       {type : String},
    race:       {type : String},
    characterClass:       {type : String},
    level: (type: Number),
    campaign:         {
            type : mongoose.Schema.ObjectId,
            ref  : 'campaign' // Collection name as MONGOOSE understands it - first arg to mongoose.model
    },
});

// export the model
module.exports = mongoose.model('Hero', heroSchema, 'heroes'); // Our entrypoint into the heroes collection in the DB
// heroes