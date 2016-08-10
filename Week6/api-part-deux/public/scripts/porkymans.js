angular.module('OakExpress', [])
	.controller('pokeDex', pokeDex)
	.factory('PorkymanFactory', PorkymanFactory)

pokeDex.$inject = ['$http', '$location', 'PorkymanFactory']
PorkymanFactory.$inject = ['$http']

	function pokeDex ($http, $location, PorkyMans) {
		console.log('Pokedex functional!')
		var dex = this;

		dex.factory = PorkyMans;

		dex.currentUrl = $location.$$absUrl;
		dex.pokemonName = '';

		dex.submit = () => {
			dex.currentPokemon.name = 'loading...';

			PorkyMans.catchOne(dex.pokemonName);
				.then(dex.submitSuccess, dex.submitError);
		}

		dex.submitSuccess = () => {
			console.debug('dex.submitSuccess', res.data);

			dex.currentPokemon = res.data;
		}

		dex.submitError = () => {
			console.error('dex.submitError', err)

		}

		dex.getChain = () => {
			PorkyMans.getEvoChain(dex.currentPokemon.evolution_chain.url)
				.then(dex.getChainSuccess, dex.getChainError)
		}

		dex.getChainSuccess = (res) => {
			console.info('Got chain', res.data);

			dex.currentEvoChain = res.data;
			dex.currentPokemon.evolvesTo = dex.currentEvoChain.evolves_to[0].species
		}
		
		dex.getChainError = (err) => {
			console.info('Could not get chain :(')
		}
	}

	function PorkymanFactory ($http) {
		
		return{
			catchOne: (pokemonName) => {
				$http.get({
					url: '/api/porkyman',
					params: { pokemon : pokemonName }
				})
			}
			getEvoChain: (url) => {}
		}
	}