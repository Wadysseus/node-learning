// app.controller.home.js
angular.module('TranslateAPI', [])
	.controller('homeController', [
		'$http',
    	'$scope',
        'homeFactory',
    	homeController
	])
    .factory('homeFactory', [
        '$http',
        homeFactory
    ])

function homeController($http, $scope, homeFactory) {
    $scope.translateInput = {};
    $scope.translateOutput = '';
    $scope.welcomeMessage = 'The only place for delicious nougat.';
    //function that retrieves our information from the server

    $scope.translateString = function() {
        homeFactory
            .createTranslation($scope.translateInput)
            .then(function(response){
                console.log(response);
            })

    	$scope.translateOutput = 'Information loading. Please wait, human...';
    	console.log('Input received: ', $scope.translateInput)
    	// $http.get('/api/translate', $scope.translateInput)
	}

}

function homeFactory ($http) {
    function createTranslation (translateData) {
        return $http.post('/api/translate', translateData)
    }

    function retrieveTranslation (translateRetrieval){
        return $http.get('/api/translate', translateRetrieval)
    }

    return {
        createTranslation : createTranslation,
        retrieveTranslation : retrieveTranslation
    }
}