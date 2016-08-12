var API = require('./api');

module.exports = (app) => {
    // app.get('/', Render.root);
    // app.get('/dashboard', Render.dashboard);
    app.get('/api/translate', API.getTranslation);
    app.post('/api/translate', API.postTranslation);
    
}