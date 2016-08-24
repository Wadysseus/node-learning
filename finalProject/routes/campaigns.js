// Campaign controller
// Route handlers dealing with campaigns

var Campaign = require('../models/campaign');

module.exports = {
    get : (req, res) => {
        if(req.params.id){
            // Find One
            Campaign.findOne({ _id : req.params.id }, function(err, campaign){
                res.json(campaign);
            });
        }
        else{
            // Find Many
            Campaign.find({}, function(err, campaigns){
                res.json(campaigns);
            });
        }
    },
    upsert : (req, res) =>{
        if(req.params.id){
            // Update
        }
        else{
            // Create
            var newCampaign = new campaign(req.body);
            newCampaign.save(function(err, doc){
                // res.json({success : 'Campaign successfully added!'});
                res.json(doc);
            });
        }
    }
}