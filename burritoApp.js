angular.module('Burritofy', [])
	.controller('orderController', 
		['$http',
		orderController])
	.controller('burritoController', 
		['burritoFactory',
		burritoController])
	.factory('burritoFactory', burritoFactory);

	function orderController ($http) {
		var oCtrl = this;

		oCtrl.orders = [];
		oCtrl.burritoSelection = [];

		oCtrl.orderCreator = function (orderInfo){
			this.firstName = orderInfo.firstName || 'Roger';
			this.lastName = orderInfo.lastName || 'the Gray';
			this.streetAddress = orderInfo.streetAddress || '1838 Kickass Cir';
			this.city = orderInfo.city || 'Babylon';
			this.zipCode = orderInfo.zipCode || '90210';
			this.phone = orderInfo.phone || '867-5309';
			this.orderType = orderInfo.orderType;

			orders.push(this);
		}

			oCtrl.burritoMenu = (oCtrl.burritoChoice) => {
				oCtrl.urritoSelection.push(burritoArray[burritoChoice]);
			}
	}

	function burritoController (burritoFactory) {
		var bCtrl = this;



	}


	function burritoFactory () {
		var bFac = this;

		var burritoArray = ['The Burrito to Conquer all Burritos', 'Meat Tornado', 'The CrossFit Disaster', 'The Korean Standard', 'The Patti Mayonnaise']

		return {
			burritoArray : burritoArray
		}
	}