// app.controller.home.js
angular.module('ColorAPI')
	.controller('homeController', [
		'$http',
		homeController])

function homeController ($http) {
	var hCtrl = this;
	hCtrl.userColor = '';

	hCtrl.colorInfo = [];

	hCtrl.welcomeMessage = 'The only place for delicious nougat.';

	//function that retrieves our information from the server
	hCtrl.getTheColors = function (){

		$http.get('/api/colors')
			.then(function(response){
				 // console.log(response);
				 //this forEach loop iterates over all indexes of our response data, pushing each object into our hCtrl.colorInfo array
				 response.data.forEach (function(item){
				 	hCtrl.colorInfo.push(item);
				 })
				 // console.log(hCtrl.colorInfo);
			});

		console.log('Such colors! Much wow!');

	}

	//call the damn function (REMEMBER TO CALL FUNCTIONS)
	hCtrl.getTheColors();

	hCtrl.userColor = '';

	hCtrl.matchTheValues = function() {		
		var color = hCtrl.userColor.toLowerCase();
		var hex = hCtrl.hexValues;
		var rgb = hCtrl.rgbValues;

		// console.log(color,hex,rgb);

		// iterates over our hCtrl.colorInfo array, checking to see if the value matches the hCtrl.userColor input from main.html
		hCtrl.colorInfo.forEach (function(item){
			if (color == item.name.toLowerCase()){
				console.log('Success!');
			}
			else {
				console.log('Frowny face');
			}
		})

}
};