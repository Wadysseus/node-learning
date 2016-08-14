var Country = require('../models/countriesModel.json');

module.exports = {
    read: (req, res) => {
        Country.find({}, (err, data) => {
            err?  reportError(res, err) : res.json(data);
        });
    }
};

function reportError(res, err) {
    console.error('ERROR'.red, err);
    res.status(500).json(err);
}