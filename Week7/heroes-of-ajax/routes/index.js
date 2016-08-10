var heroCtrl = require('./heroes');

module.exports = (app) => {

    // Routes go here

    // Hero Routes
    app.get('/api/heroes', heroCtrl.get)
    app.post('/api/heroes', heroCtrl.upsert)
}