/*
 * GET home page.
 */

module.exports = {
	index: function(req, res){
  		res.sendfile('home.html', { root: './public/html' });
	}
};