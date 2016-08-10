var API = require('./api');

module.exports = (app) => {
    // app.get('/', Render.root);
    // app.get('/dashboard', Render.dashboard);
    app.post('/api/translate', API.postTranslation);
    app.get('/api/translate', API.getTranslation);
}