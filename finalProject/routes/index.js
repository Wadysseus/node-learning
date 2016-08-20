module.exports = (app) => {
	app.get('/', (req,res) => {
		res.sendFile("index.html", {root: "./public/html"})
	});

	app.get('/login', (req,res) => {
		res.sendFile("login.html", {root: "./public/html"})
	});

	app.get('/about', (req,res) => {
		res.sendFile("about.html", {root: "./public/html"})
	});

		app.get('/profile', (req,res) => {
		res.sendFile("profileHome.html", {root: "./public/html"})
	});

    // Hero Routes
    // app.get('/api/heroes', heroCtrl.get);
    // app.post('/api/heroes', heroCtrl.upsert);
    
    // // HQ Routes
    // app.get('/api/hqs', hqCtrl.get); // Find Many
    // app.get('/api/hqs/:id', hqCtrl.get); // Find One
    // app.post('/api/hqs', hqCtrl.upsert); // Create
    // app.post('/api/hqs/:id', hqCtrl.upsert); // Update
    

}