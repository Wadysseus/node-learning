var requestinator = require('request'),
	baseUrl = 'http://pokeapi.co/api/v2';

module.exports = {

	catchOne: (req, res) => {
	var endpoint = `${baseUrl}/pokemon-species/${req.query.pokemon}`

		request(endpoint, (error, response, body) =>{ 
			if ( error ) {
				res.status(500).send({
					message: 'Ask Nurse Joy to run diagnostics, cuz shit be broken'
				})
			} else {
				res.send(body);
			}
		});
	},
	evolution: (req, res) => {
		var endpoint = `${baseUrl}/evolution-chain/${req.query.evoChainId}`
	}
}