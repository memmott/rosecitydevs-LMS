// Quiz Functions
function makeQuiz() {
	var quiz = []
	for(var i=0;i<10;i++) {
		quiz.push(problems[random(0, 4)]());
	}
	return quiz
}

function readQuiz(quiz) {
	var count = 1;
	for(var i=0;i<quiz.length;i++) {
		var problem = quiz[i];
		console.log(count + ") ")
		console.log("Q: " + problem.question);
		console.log("A: " + problem.answer);
		console.log(" ");
		count ++;
	}
}

function renderQuiz(quiz) {
  var count = 1;
  var questions = []
  for(var i=0;i<quiz.length;i++) {
    var problem = quiz[i];
    var question = problem.question;
    if(question.indexOf("{}") >= 0) {
      var segments = question.split("{}");
      var $question = $('<span></span>').text(segments[0]);
      for(var j=1;j<segments.length;j++) {
        $question.append($('<div></div>').addClass('blank-box'));
        $question.append($('<span></span>').text(segments[j]));
      }
      
    } else {
      $question = $('<span></span>').text(question);
    }
    var $answers = [];
    if(typeof problem.answer === 'object') {
	    for(var j=0;j<problem.answer.length; j++) {
	      $answers.push($('<input>'))
	    }
    } else {
    	$answers = $('<input>');
    }
    questions.push($("<p class='question'></p>").append($question))
    questions.push($("<p class='answers'></p>").append($answers))
  }
  $('#target').append(questions);
}

//Utility Functions
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomOdd(min, max) {
	var num, even = true;
	while(even) {
		num = random(min, max);
		if(num % 2 !== 0) {
			even = false;
		}
	}
	return num;
}

function convertToRomanNumeral(num) {
  var numerals = [["M",1000],["D",500],["C",100],["L",50],["X",10],["V",5],["I",1]];
  var subtractive = [["IIII", "IV"], ["VIIII", "IX"], ["VIV", "IX"] ,["XXXX", "XL"], ["LXXXX", "XC"], ["LXL", "XC"], ["CCCC", "CD"], ["DCCCC", "CM"], ["DCD", "CM"]];
  var output = "";
  for(var i=0;i<numerals.length;i++) {
    var letter = numerals[i][0];
    var value = numerals[i][1];
    if(num>=value) {
      var mutiples = Math.floor(num/value);
      for(var j=0;j<mutiples;j++) {
        output+=letter;
        num -= value;
      }
    }
  }
  for(var k=0;k<subtractive.length;k++) {
    if(output.indexOf(subtractive[k][0]) >=0) {
      output = output.replace(subtractive[k][0], subtractive[k][1]);
    }
  }
 return output;
}

function checkPrime(num) {
	var prime = true;
	for(var i=2;i<num;i++) {
		if(num % i === 0) {
			prime = false;
		}
	}
	return prime;
}

function yesOrNo(bool) {
	if(bool) {
		return "yes";
	} else {
		return "no";
	}
}

//Question functions
function evalRomanNumeral() {
	var num = random(1000, 3000);
	var roman = convertToRomanNumeral(num);
	return {
		question: "What is " + num + " as a roman numeral?", 
		answer: roman
	};
}

function isPrime() {
	var num = randomOdd(2, 30);
	var status = checkPrime(num);
	return {
		question: "Is " + num + " a prime number?",
		answer: yesOrNo(status)
	};
}

function roundToHundred() {
	var num = random(101, 899);
	var rounded = Math.round(num / 100) * 100;
	return {
		question: "Round " + num + " to the nearest hundred.",
		answer: rounded
	};
}

// possibility of other solutions
function twoOfFour() {
	var nums = [random(2, 50), random(2, 50), random(2, 50), random(2, 50)];
	var total = nums[1] + nums[2];
	var answer = [nums[1], nums[2]];
	return {
		question: "Choose two numbers in [" + nums.sort().join(", ") + "] to make {} + {} = " + total,
		answer: answer
	};
}

function estimateSums() {
	var nums = [random(20, 80), random(20, 80)];
	var roundedSum = Math.round(nums[0] / 10) * 10 + Math.round(nums[1] / 10) * 10; 
	return {
		question: "Estimate the sum of " + nums[0] + " + " + nums[1] + " by rounding each number to the nearest 10 and then adding.",
		answer: roundedSum
	}
}

function sumAndDiff() {
	var nums = [random(2, 9), random(2, 9)];
	var sum = nums[0] + nums[1];
	var diff = Math.abs(nums[0] - nums[1]);
	return {
		question: "The difference of 2 numbers is " + diff + " and their sum is " + sum + ". What are the two numbers?",
		answer: nums
	}
}


var problems = [evalRomanNumeral, isPrime, roundToHundred, twoOfFour, estimateSums, sumAndDiff];

current = problems[5]();

// readQuiz(makeQuiz())

console.log(current.question);
console.log(current.answer);