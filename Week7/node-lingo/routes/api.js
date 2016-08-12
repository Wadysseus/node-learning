// var Beer = require('../models/beer');
var request = require('request');
var googleTranslate = require('google-translate')('AIzaSyCJtTINrVX16UdvTnPThJia82CoLNch9mQ');


// googleTranslate.translate('My name is Brandon', 'es', function(err, translation) {
//   console.log(translation.translatedText);
//   // =>  Mi nombre es Brandon
// });

module.exports = {
    getTranslation: (req, res) => { // POST
        console.log(req.body)

        // beer.save((err, newBeer)=>{
        //     err?  reportError(res, err) : res.json(newBeer);
        // })
    },
    postTranslation: (req, res) => { // GET
        console.log(req.body.source)
        googleTranslate.translate(req.body.source, 'en', 'es', function(err, translation) {
            if (err) {
                console.log(err)
            }
            console.log(translation.translatedText)
            res.send()  //  or res.json (`translate : ${translatedText`)-- probably not correct
        });
    }
}

function reportError(res, err) {
    console.error('ERROR'.red, err);
    res.status(500).json(err);
}