module.exports = (app) => {
	app.get('/', (req, res) => {
		res.render('home.html', {
			pageTitle: 'Beer App',
			sectionTitle: 'Beer Fest',
		});
	});
	app.get('/dashboard', (req, res) => {
		res.render('dashboard.html', {
			pageTitle: 'Yes this is Dashboard',
			sectionTitle: 'My board is quite dashing',
		});
		
		//just to show you can reuse html files as templates
		// res.render('home.html', {
		// 	pageTitle: 'Dashboard',
		// 	sectionTitle: 'Dash Fest',
		// });
	});
}