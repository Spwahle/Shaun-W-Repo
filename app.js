'use strict';

var userName = prompt('Hey, how\'s it going? Want to play a game? First what is your name?');
alert ('Welcome ' + userName + ', I\'m excited for you to play!');

var userAnswerTotal = 0;

function Question1() {
  //Q1 is a Y/N that utilizes if else
  var answer3 = prompt('Do I enjoy running?').toLowerCase();
  console.log('The user answered ' + answer3 + ' to question 3.');
  if(answer3 === 'yes' || answer3 === 'y')
  {
    alert('I mean.....I mostly like running,');
  } else if(answer3 === 'no' || answer3 === 'n')
  {
    alert('You\'re not quite correct. I mostly enjoy running');
    userAnswerTotal++;
  } else {
    alert('Answer with either yes or no / y or n');
  }
}
function Question2() {
 //Q2 is a Y/N that utilizes if else
 var answer2 = prompt('Do you think I have any pets?').toLowerCase();

 console.log('The user answered ' + answer2 + ' to question 2.');

  if (answer2 === 'yes' || answer2 === 'y'){
    alert('Yes! I have one cat');
    userAnswerTotal++;
  } else if(answer2 === 'no' || answer2 === 'n')
  {
    alert('Nope, I actually have one cat');
  } else {
    alert('Answer with either yes or no / y or n');
  }
}

function Question3() {
//Q3 is another if else
var answer4 = prompt('Do I like to coding?').toLowerCase();
console.log('The user answered ' + answer4 + ' to question 4.');

  if(answer4 === 'yes' || answer4 === 'y'){
    alert('Yep, I really enjoy coding so far!');
    userAnswerTotal++;
  } else if(answer4 === 'no' || answer4 === 'n')
  {
    alert ('Sorry you\'re wrong, I love coding');
  } else
  {
    alert('Answer with either yes or no / y or n');
  }
}

function Question4() {
//Q4 is the another Y/N with if else
var answer5 = prompt('Did I work 10 years in Food Technology?').toLowerCase();
console.log('The user answered ' + answer5 + ' to question 5.');
  if(answer5 === 'yes' || answer5 === 'y') {
    alert('No! How old do you think I am?!');
  } else if(answer5 === 'no' || answer5 === 'n') {
    alert('Yep! I actually worked 5 years in food science making junk food.');
    userAnswerTotal++;
  } else {
    alert('Answer with either yes or no / y or n');
  }
}

function Question5() {
//Q5 is a Y/N that uses a if else statement
var answer1 = prompt('Do you think I like to travel and cook?').toLowerCase();
console.log('The user answered ' + answer1 + ' to question 1.');

  if (answer1 === 'no' || answer1 === 'n'){
    alert('Sorry that\'s wrong, I LOVE to travel and cook.');
  } else if(answer1 === 'yes' || answer1 === 'y')
  {
    alert('YES! I actually love traveling and cooking.');
    userAnswerTotal++;
  } else {
    alert('Answer with either yes or no / y or n');
  }
  }

function Question6() {

//Q6 is a numerical guessing game that utilizes a do/while loop. My game will try to help the user with hints
var question6CorrectAnswer = 29;
var question6GuessCount = 0;
  do {
    question6GuessCount++;
    var answer6 = parseInt(prompt('How old do you think I am?'));
    console.log('The user answered ' + answer6 + ' to question 6.');
    if(answer6 === question6CorrectAnswer){
      alert('You\'re right, congratulations!  And it only took you ' + question6GuessCount + ' guesses!');
      userAnswerTotal++;
      break;
    } else if(answer6 > question6CorrectAnswer && answer6 >= 31) {
      alert('Too high');
    } else if(answer6 < question6CorrectAnswer && answer6 <= 28) {
      alert('Too low');
    } else {
      alert('You need to enter a number please');
    }
  }
  while(question6GuessCount < 4);
  if(question6GuessCount >= 5){
    alert('Aw shucks you ran out of guesses');
  }
}

function Question7() {
//Q7 is a mess of a question but it uses a loop inside of a loop. It has an array that will print if the user succeeds
var question7GuessCount = 0;
var q7UserCorrect = false;
var question7CorrectAnswers = ['Chiang Mai','Hanoi','Budapest','Munich','Playa Del Coco'];

  while(question7GuessCount < 6 && q7UserCorrect === false) {
  var answer7 = prompt('Can you guess one of my top favorite cities? Please answer with the city name only').toLowerCase();
  console.log('The user answered ' + answer7 + ' to question 7.');
  for(var i = 0 ; i < question7CorrectAnswers.length ; i++) {
    if(answer7 === question7CorrectAnswers[i].toLowerCase()) {
      q7UserCorrect = true;
      userAnswerTotal++;
      //breaks out of the for loop if a match is found
      break;
      }
      } if(q7UserCorrect === false) {
      alert('Sorry, you guessed wrong. Try again!');
      question7GuessCount++;
      }
      } if(q7UserCorrect === true) {
      alert('You guessed right, congratulations! The correct answers were ' + question7CorrectAnswers + '.');
      } else {
      alert('Sorry, you\'re out of guesses. The correct answers were ' + question7CorrectAnswers + '.');
      }
    }

Question1();
Question2();
Question3();
Question4();
Question5();
Question6();
Question7();

//this alert should print out with the user's name and the total number of correct answers
alert('Thanks for playing my guessing game,' + userName + ', you got ' + userAnswerTotal + ' questions right out of 7.');
console.log('The user got ' + userAnswerTotal + ' questions right out of 7.');
