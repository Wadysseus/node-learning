angular.module('crAPI')
	.controller('pcController', pcController)
	.controller('campaignController', campaignController)
	.controller('userController', userController);


	function pcController () {
		var pcCtrl = this;
		console.log('pcController online, human.');
		
		pcCtrl.newCharacter = {

		}


	}


	function campaignController () {
		var cCtrl = this;
		console.log('campaignController online, human.');
	}


	function userController () {
		var uCtrl = this;
		console.log('userController online, human.');



	}
