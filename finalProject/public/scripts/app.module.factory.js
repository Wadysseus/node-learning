angular.module('crAPI')
	.factory('apiFactory', [
		'$http',
		apiFactory]);

	function apiFactory ($http) {

	    function getPCs () {
	        return $http.get('/api/pcs')
	    }
	    function createPC (pcData) {
	        return $http.post('/api/pcs', pcData)
	    }

	    function getCampaigns (campaignID){
	        var param = campaignID ? `/${campaignID}` : '';

	        // var param = '';
	        // if(hqID){
	        //     param = `/${hqID}`;
	        //     // '/' + hqID
	        // }

	        return $http.get(`/api/campaigns${param}`)
	        // '/api/hqs' + param
	    }
	    function createCampaign (campaignData){
	        return $http.post('/api/campaigns', campaignData)
	    }

	    // This return value is exactly what we gain access to in the controller
	    return {
	        getPCs : getPCs,
	        createPC: createPC,
	        getCampaigns    : getCampaigns,
	        createCampaign  : createCampaign,
	    }

	}