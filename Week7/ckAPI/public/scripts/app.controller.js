angular.module('CopApp', [])
	.controller('copController', 
		['$http',
		'$location',
		'copFactory',
		copController])
	.factory('copFactory', 
		['$http',
		copFactory])

function copController ($http, $location, copFactory) {
	var cCtrl = this;
	cCtrl.copKillInfo = [];

	console.log('cCtrl online, human.')

	cCtrl.dumpInfo = function () {
		console.info('Dumpin dat info boss!')
		copFactory.grabInfo()
			.then(cCtrl.infoSuccess, cCtrl.infoFail)
			.then(cCtrl.setName)
	}

	cCtrl.infoSuccess = (res) => {
		console.debug('cCtrl.infoSuccess', res.data[0]) //,res.data as second parameter
			var par = res.data;
			if (par){
				for (var i = 0; i < par.length; i++){
					cCtrl.copKillInfo.push(res.data[i])
				}
		// 		res.data.forEach( () => {
		// 	cCtrl.copKillInfo.push(res.data.name)			
		// })
	}
}

	cCtrl.infoFail = (err) => {
		console.error('cCtrl.infoFail', err);
	}
}

function copFactory ($http) {
	return {
		grabInfo: () => {
			return $http({
				url: '/api/copStart'
			});
		}
	}
}



// BROKEN SHIT!?

				// function(par){
			// 		console.log(par.length)
			// 		for(var i =0; i< par.length; i ++){
			// 			// console.log(par.name[i]);
			// }