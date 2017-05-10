'use strict';

//First question will open up a prompt for me to input my name. The var user will be defined by the user's answer
  var user = prompt('What is your name?');
  console.log('user:' + user);
//alert will show user's input and alert with following string
  alert('Hello there, ' + user + '. I\'m going to ask you a few questions');
//second question is a yes or no question which works on (if/else) statement
  var answer = prompt(user + ', Please try and guess a few questions which will help you learn about me. Please answer with yes or no. Do you think I love to code?');
  console.log('users answer:' + answer);

  if (answer === 'no') {
    alert('Nice try - but I love to code');
  }
  else {
    alert('yeaaaah, I love to code!!!!');
  }
//This is my third question asking the user trying to do a age guessing
  var myAge = prompt('Can you guess my age?');
  if (myAge === '29'){
    alert('Actually that\'s correct, how did you know?');
  }
  else if (myAge > '29') {
    alert('No that is too low');
  }
  else {
    alert('That\'s too low!');
  }


  var myCooking = prompt('Do I love to cook? yes or no?').toLowerCase();
  if (myCooking === 'yes') {
  alert('Cooking is my favorite thing!');
  }
  else {
  alert('Nope, sorry you guessed wrong');
  }
//This is my fourth question asking about animals. It's a yes or no question
  var animals = prompt('Do I like animals? YES or NO?').toUpperCase();

  if (animals === 'YES') {
  alert('Correct! I do like animals');
  }
  else {
  alert('No, sorry I love animals!');
  }
//This is my fifth question asking between three fruit choices
  var fruit = prompt('Do you think I like either apples or bananas?').toLowerCase();
  console.log(fruit);

  if (fruit === 'bananas') {
    alert('Bananas are so delcious!');
  }
  if (fruit === 'apples') {
    alert('apples are so refreshing!');
  }
  else {
    alert('I prefer something else');

    alert("Thanks for playing!")
};
