angular.module('crAPI')
	.factory('apiFactory', [
		'$http',
		apiFactory]);

	function apiFactory ($http) {

	    function retrievePCs () {
	    	// console.log('factory retrievePCs function online')
	        return $http.get('/api/pcs')
	    }
	    function createPC (pcData) {
	        return $http.post('/api/pcs', pcData)
	    }

	    function retrieveCampaigns (){
	        return $http.get('/api/campaigns')
	    }

	    function findOneCampaign (campaignID){
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

	    function retrieveUser (){
	    	return $http.get('/api/user')
	    }

	    // This return value is exactly what we gain access to in the controller
	    return {
	        retrievePCs : retrievePCs,
	        createPC: createPC,
	        retrieveCampaigns    : retrieveCampaigns,
	        createCampaign  : createCampaign,
	    }

	}