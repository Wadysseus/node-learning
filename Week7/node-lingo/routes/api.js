// var Beer = require('../models/beer');
var request = require('request'),
    baseUrl = "";


module.exports = {
    postTranslation: (req, res) => { // POST
        var translateThis = 

        beer.save((err, newBeer)=>{
            err?  reportError(res, err) : res.json(newBeer);
        })
    },
    getTranslation : (req, res) => { // GET
        Beer.find(req.query, (err, beer) => {
            err?  reportError(res, err) : res.json(beer);
        })
    }
}

function reportError(res, err) {
    console.error('ERROR'.red, err);
    res.status(500).json(err);
}