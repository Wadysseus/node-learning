// Write a function secondGreatLow that takes a single array of numbers and returns the second lowest and second greatest numbers, respectively, separated by a space. For example: if the 
// array contains [7, 7, 12, 98, 106] the output should be "12 98". The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!

// EXERCISE COMPRETE

var numArray = [7, 7, 12, 98, 106];

	var secondGreatLow = (numArray) => {
		numArray.sort(function compareNumbers(a, b) {
	  		return a - b;
		});

		var returnArray = [];

		for (var i=0;i < numArray.length; i++){
			if (numArray[i-1] !== numArray[i]){
				returnArray.push(numArray[i])
			}
		}
		console.log(returnArray)
		console.log(returnArray[1] + ', ' + returnArray[returnArray.length-2])
	}

//Write a function timeConvert that takes a number parameter and returns the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). 
//Separate the number of hours and minutes with a colon.

// EXERCISE COMPRETE

var timeConvert = (minuteger) => {
	var hours = Math.floor(minuteger / 60)
	// console.log(hours);
	var minutes = minuteger - hours * 60
	// console.log(minutes)
	console.log(hours + ":" + minutes)
}

//Write a function bracketMatcher that takes a single string parameter and returns true if the brackets are correctly matched and each one is accounted for. Otherwise return false. 
//For example: if str is "(hello (world))", then the output should be true, but if str is "((hello (world))" the the output should be false because the brackets do not correctly match up.
// "(()())" should return true. Only "(" and ")" will be used as brackets. If str contains no brackets return true.

var truthyStr = '(hello (world))';
var falseyStr = '((hello (world))';

	var bracketMatcher = (str) => {
		
		var arrayCharles = [];
		
		for (var i=0; i < str.length; str++){
			if (str[i] == '(' ){
				arrayCharles.push(str[i]);
			} else if (str[i] == ')'){
				if (arrayCharles.pop() === ')') {
					continue
				} else {
					console.log(false);
					return false;
				}
			}
	};
	console.log(true);
	return true;
}




// 	var syntaxValidator = function(functionString) {
// 	  var openStack = [];
// 	  var closeStack = [];
// 	  for (i = 0; i < functionString.length; i++) {
// 	    if (functionString[i] == '(' || functionString[i] == '[' || functionString[i] == '{') {
// 	      openStack.push(functionString[i]);
// 	    } else if (functionString[i] == ')') {
// 	      if (openStack.pop() === '(') {
// 	        continue
// 	      } else {
// 	        console.log(false);
// 	        return false;
// 	      }
// 	    } else if (functionString[i] == ']') {
// 	      if (openStack.pop() === '[') {
// 	        continue
// 	      } else {
// 	        console.log(false);
// 	        return false;
// 	      }
// 	    } else if (functionString[i] == '}') {
// 	      if (openStack.pop() === '{') {
// 	        continue
// 	      } else {
// 	        console.log(false);
// 	        return false;
// 	      }
// 	    }
// 	  }
// 	  console.log(true);
// 	  return true;
// 	}

// var testString1 = "function htmlDoc(title, bodyContent) {return tag('html', [tag('head', [tag('title', [title])]), tag('body', bodyContent)]);}"
// var testString2 = "function htmlDoc(title, bodyContent) {return tag('html', [tag('head', [tag('title', [title])), tag('body', bodyContent)]);}"
// var testString3 = "function htmlDoc(title, bodyContent) {return tag('html', [tag 'head', [tag('title', [title])]), tag('body', bodyContent)]);}"
// var testString4 = "function htmlDoc(title, bodyContent) {return tag('html', [tag('head', [tag('title', [title]])), tag('body', bodyContent)]);}"
// syntaxValidator(testString1);
// syntaxValidator(testString2);
// syntaxValidator(testString3);
// syntaxValidator(testString4);