angular.module('CountryApp')
	.controller('countryController', 
		['$http',
		countryController])
	.factory('countryFactory', countryFactory)

countryFactory.$inject = ['$http']

	function countryController (countryFactory) {
		var cCtrl = this;
		console.log('Yes hello this is controller');

		cCtrl.getDemCountries = function () {
			console.log('Countries are being got')
			countryFactory.popCountries();
		}
	}


	function countryFactory ($http) {
		function popCountries () {
        	return $http.get('/countries', function(req, res){
			    res.send('TEST')
			})
        }

    	return {
    		popCountries : popCountries
    	}
	}