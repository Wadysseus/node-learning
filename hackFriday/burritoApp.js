angular.module('BurritoApp', [])
	.controller('orderController', 
		['$http',
		orderController])
	.controller('burritoController', 
		['burritoFactory',
		burritoController])
	.factory('burritoFactory', burritoFactory);

	function orderController ($http) {
		var oCtrl = this;

		var orders = [];

		function orderCreator (orderInfo){
			this.firstName = orderInfo.firstName;
			this.lastName = orderInfo.lastName;
			this.streetAddress = orderInfo.streetAddress;
			this.city = orderInfo.city;
			this.zipCode = orderInfo.zipCode;
			this.phone = orderInfo.phone;
			this.orderType = orderInfo.orderType;

			orders.push(this);
		}
	}

	function burritoController (burritoFactory) {
		var bCtrl = this;

		var burritoSelection = [];

			bCtrl.burritoMenu = (bCtrl.burritoChoice) => {
				burritoSelection.push(burritoArray[burritoChoice]);
			}

	}


	function burritoFactory () {
		var bFac = this;

		var burritoArray = ['The Burrito to Conquer all Burritos', 'Meat Tornado', 'The CrossFit Disaster', 'The Korean Standard', 'The Patti Mayonnaise']


		return {
			burritoArray : burritoArray
		}
	}