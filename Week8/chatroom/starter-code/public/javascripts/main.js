	// connect the socket.io server
// creating socket connections on the FRONT-END
var socket = io.connect('http://localhost')  // this essentially does something like socket.emit('connection')
                    						// now the backend and the frontend are connected with an open socket
	//define socket events
	socket.on('connect', function(){
		socket.emit('message', 'We are all passengers on Spaceship Earth. I get so FIRED UP on the DREEEEAM!')
	})
	// attach events
angular.module('ChatApp', [])
	.controller('chatTroll', chatTroll)

	function chatTroll ($scope) {
		var cTroll = this;

		cTroll.chatLog = [];

		socket.on('message', function(userMsg){
			console.log(userMsg);
			cTroll.chatLog.push(userMsg);
		})
	}



    // socket.on('incomingTweet', function(tweet){
    //     // inside this call, we lost angular scope, because it is a 3rd-party library.
    //     console.log(tweet);
    //     // document.body.innerText += tweet.text +'\n';
    //     tweeter.incomingTweets.push(tweet);
    //     $scope.$apply();
    // });
}


// 	function NumberController($scope) {
//     var nCtrl = this;

//     nCtrl.numbers = []

//     setInterval(function(){
//         socket.emit('randomNumber', Math.random());
//     }, 2000);

//     socket.on('newNumber', function(number){ // absorb the newNumber from the server
//         nCtrl.numbers.push(number);
//         $scope.$apply();
//     });
// }