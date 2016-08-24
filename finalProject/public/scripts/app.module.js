angular.module('crAPI', []);
	.config(function($routeProvider) {
	    $routeProvider.when( '/profile', {
	      templateUrl: '~/views/base.html'
	    });
	    $routeProvider.when( '/create', {
	      templateUrl: '~/views/createHome.html'
	    })
	    $routeProvider.when( '/createCharacter', {
	      templateUrl: '~/views/createCharacter.html'
	    })
	    $routeProvider.when( '/createCampaign', {
	      templateUrl: '~/views/createCampaign.html'
	    })
	    // default route //
	    $routeProvider
	      .otherwise({
	        redirectTo: '/profile'
	      });
	});