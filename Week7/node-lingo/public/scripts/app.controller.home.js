// app.controller.home.js
angular.module('TranslateAPI', [])
	.controller('homeController', [
		'$http',
    	'$scope',
    	homeController
	])


function homeController($http, $scope, translateFactory) {
    $scope.translateInput = '';
    $scope.translateOutput = '';
    $scope.welcomeMessage = 'The only place for delicious nougat.';
    //function that retrieves our information from the server

    $scope.translateString = function() {
    	$scope.translateOutput = 'Information loading. Please wait, human...';
    	console.log('Input received: ', $scope.translateInput)
    	$http.post('/api/translate', $scope.translateInput)
	}



}