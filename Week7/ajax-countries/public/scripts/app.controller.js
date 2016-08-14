angular.module('CountryApp')
	.controller('countryController', 
		['$http',
		'countryFactory',
		countryController])
	.factory('countryFactory', 
		['$http',
		countryFactory])


	function countryController ($http, countryFactory) {
		var cCtrl = this;
		console.log('Yes hello this is controller');

		cCtrl.getDemCountries = function () {
			console.log('Countries are being got', countries)
			countryFactory.popCountries();
		}

		// hCtrl.retrieveHeroes = function(){
	 //        apiFactory
	 //            .getHeroes()
	 //            .then(function(response){
	 //                hCtrl.heroList = response.data;
	 //            });
	 //    }


	}


	function countryFactory ($http) {
		function popCountries () {
        	return $http.get('/countries')
        }

     //    function getHeroes () {
	    //     return $http.get('/api/heroes')
	    // }

    	return {
    		popCountries : popCountries
    	}
	}