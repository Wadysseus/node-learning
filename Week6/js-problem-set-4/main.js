// 1- Write a function addNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns the sum. 
// For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like 
// in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.

var string = '88Hello 3World';

//Kinda works, but it seems like it needs TWO string characters after any numbers in order for them to register. wat.
function addNumbers (string) {
	var runningTotal = 0;
	var tempNumNums = [];
	for (var i=0;i < string.length; i++){
		if (isNaN(string[i])){
			var nonArray = tempNumNums.join('');  //this is turning it back into a string
			var beNumber = Number(nonArray);
			// console.log(beNumber);
			// console.log(tempNumNums);
			runningTotal += beNumber;
			tempNumNums = [];
		} else {
			tempNumNums.push(Number(string[i]));
			// console.log(tempNumNums);
		}
	}
	console.log(runningTotal)
}




// 2- Write a function longestWord that takes a single string parameter and returns the largest word in the string. If there are two or more words that are the 
// same length, it returns the first word from the string with that length. Ignore punctuation and assume the input sentence will not be empty.



function longestWord(string) {
	var stringArray = string.split(' ')
	var tallest = '';
	stringArray.forEach( function(word){
		if (word > tallest.length){
			tallest = word;
		}
	})
	console.log(tallest);
}






// LOLZ
// if (string[i] == 0 || string[i] == 1 || string[i] == 3 || string[i] == 4 || string[i] == 5 || string[i] == 6 || string[i] == 7 || string[i] == 8 || string[i] == 9){
// 			if tempNumNums += string[i]
// 		}

// SMASH UP RANDOMIZER SNIPPET ===-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===

// var smashUpSides = ["Zombie", "Pirate", "Ninja", "Wizard", "Trickster", "Robot", "Alien", "Dinosaur", "Killer Plant", "Steampunk", "Ghost", "Bear Cavalry"]

// function smooshTogether(sideOne, sideTwo){
//     console.log("You should play " + sideOne + "-" + sideTwo + "s")
// }

// function randomSmoosh(){
//     var sideOne = smashUpSides[Math.floor(Math.random() * sideOne.length-1)];
// 	var sideTwo = smashUpSides[Math.floor(Math.random() * sideTwo.length-1)];
//         while (sideOne == sideTwo){
//             var sideTwo = smashUpSides[Math.floor(Math.random() * sideTwo.length-1)];
//         }
//     smooshTogether(sideOne, sideTwo)
// };

// SMASH UP RANDOMIZER SNIPPET ===-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=== END