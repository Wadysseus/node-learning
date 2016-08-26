angular.module('crAPI')
	.controller('pcController', pcController)
	.controller('campaignController', campaignController)
	.controller('userController', userController);

pcController.$inject = ['apiFactory', '$location'];
campaignController.$inject = ['apiFactory', '$location'];
userController.$inject = ['apiFactory'];

// Start of pcController
	function pcController (apiFactory, $location) {
		var pcCtrl = this;
		console.log('pcController online, human.');

		pcCtrl.submitPC = () => {
			apiFactory
				.createPC(pcCtrl.newPC)
				.then(function(response){
					console.log(response);
					
				});
				$location.url("/roster.html");
		}

		// pcCtrl.talkToMe = () => {
		// 	console.log("Yep, we're talking.")
		// }

		pcCtrl.listPCs = () => {
			console.log("retrievin' PCs, boss!")
			apiFactory
				.retrievePCs()
				.then(function(response){
					console.log('listPCs response: ', response)
					pcCtrl.pcList = response.data;

				});
		}


	}
// End of pcController 

	function campaignController (apiFactory, $location) {
		var cCtrl = this;
		console.log('campaignController online, human.');

		cCtrl.submitCampaign = () => {
			apiFactory
				.createCampaign(cCtrl.newCampaign)
				.then(function(response){
					console.log(response);
					
				});
				$location.url("/campaignList.html");
		}

		cCtrl.listCampaigns = () => {
			console.log("retrievin' campaigns, boss!")
			apiFactory
				.retrieveCampaigns()
				.then(function(response){
					console.log('listCampaigns response: ', response)
					cCtrl.campaignList = response.data;

				});
		}

		}


	function userController (apiFactory) {
		var uCtrl = this;
		console.log('userController online, human.');

		uCtrl.pullUser = () => {
			console.log("retrievin' User, boss!")
			apiFactory
				.retrieveUser()
				.then(function(response){
					console.log('pullUser response: ', response)
					uCtrl.currentUser = response.data;
				});
		}
		uCtrl.pullUser()

	}
