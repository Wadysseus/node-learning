var heroCtrl = require('./heroes');
var hqCtrl = require('./hqs');

module.exports = (app) => {

    // Routes go here

    // Hero Routes
    app.get('/api/heroes', heroCtrl.get)
    app.post('/api/heroes', heroCtrl.upsert)

    // HQ Routes
    app.get('/api/hqs', hqCtrl.get); //Find many
    app.get('/api/hqs/:id', hqCtrl.get); //Find one
    app.post('/api/hqs', hqCtrl.upsert); //Create
    app.post('/api/hqs/:id', hqCtrl.upsert); //Update
}