var requestinator = require('request'),
	baseUrl = 'https://thecountedapi.com/api/counted';

module.exports = {
	grabInfo: (req, res) => {
		var endpoint = baseUrl

		requestinator(endpoint, (error, response, body) => {
			if( error ){
				res.status(500).send({
					message: 'You have fucked up'
				})
			} else {
				res.send(body);
			}
		})
	}
}