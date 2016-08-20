// Campaign model

var mongoose = require('mongoose');

var campaignSchema = mongoose.Schema({
    name:      {type: String},
    DM: {type: String},
    system : {type: String},
    setting:    {type: String},
    ongoing:    {type: Boolean},
    schedule: {type: String},
});

module.exports = mongoose.model('campaign', campaignSchema);