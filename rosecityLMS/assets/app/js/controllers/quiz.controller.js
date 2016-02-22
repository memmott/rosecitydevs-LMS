angular.module('LMSApp')


.controller('MainController', function($scope) {


  // Quiz Functions
  function makeQuiz() {
    var quiz = []
    for(var i=0;i<10;i++) {
      quiz.push(problems[random(0, problems.length - 1)]());
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
    var questions = [];
    var $quiz = [];
    for(var i=0;i<quiz.length;i++) {
      var problem = quiz[i];
      var $question = [];
      var $answers = [];
      if(problem.question.indexOf("{}") >= 0) {
        var segments = problem.question.split("{}");
        $question.push(segments[0]);
        for(var j=1;j<segments.length;j++) {
          $question.push($('<div></div>').addClass('blank-box'));
          $question.push(segments[j]);
        }
      } else {
        $question = problem.question;
      }
      if(typeof problem.answer === 'object') {
        for(var j=0;j<problem.answer.length; j++) {
          $answers.push($('<input>'))
        }
      } else {
        $answers = $('<input>');
      }
      $quiz.push($("<p class='question question-" + (i + 1) + "'></p>").append($question))
      $quiz.push($("<p class='answers answer-" + (i + 1) + "'></p>").append($answers))
    }
    $('#quiz').append($quiz);
  }

  //Utility Functions
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomOdd(min, max) {
    var num = random(Math.floor(min / 2), Math.floor(max / 2)) * 2 + 1;
    return num;
  }

  function randomLetter() {
    return String.fromCharCode(random(97, 122));
  }

  function toRomanNumeral(num) {
    var numerals = [["M",1000],["CM",900],["D",500],["CD",400],["C",100],["XC",90],["L",50],["XL",40],["X",10],["IX",9],["V",5],["IV",4],["I",1]];
    var output = "";
    for(var i=0;i<numerals.length;i++) {
      var letter = numerals[i][0];
      var value = numerals[i][1];
      if(num>=value) {
        var mutiples = Math.floor(num/value);
        for(var j=0;j<mutiples;j++) {
          output += letter;
          num -= value;
        }
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
    var roman = toRomanNumeral(num);
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
      question: "Choose two numbers in <div class='number-box'>" + nums.sort().join(", ") + "</div> to make <div class='blank-box'></div> + <div class='blank-box'></div> = " + total,
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

  function varExpression() {
    var nums = [random(2, 9), random(2, 9)];
    var letter = randomLetter();
    var sum = nums[0] + nums[1];
    return {
      question: "Find the value of the expression " + nums[0] + " + " + letter + " for " + letter + " = " + nums[1],
      answer: sum
    }
  }

  function increasingGrowth() {
    var growth = random(2, 6);
    var nums = [random(1, growth - 1)]
    for(var i=0; i<5; i++) {
      nums.push(nums[i] + growth)
    }
    return {
      question: "Type the next number in this sequence: " + nums.slice(0, 5).join(", ") + ", <div class='blank-box'></div>.",
      answer: nums[5]
    }
  }

  var problems = [evalRomanNumeral, isPrime, roundToHundred, twoOfFour, estimateSums, sumAndDiff, varExpression, increasingGrowth];
  $scope.quiz = makeQuiz();
  $scope.current = $scope.quiz[0];
  console.log($scope.current.question)
  // renderQuiz(makeQuiz())

  // readQuiz(makeQuiz())


  // var current = problems[7]();
  // console.log(current.question);
  // console.log(current.answer);


  /* Notes:
  potientially use d3 for geometry questions
  decide on a way to filter entry questions vs multiple choice, perhaps another attribute?
  find a way to render fractions properly
  */


});