'use strict';

var guesses = 0;
var user = prompt('Hello! who are you?');
console.log('user'+ user);


var hello = prompt('hey, ' + user + ' ready to know me better? ');


function gGame1() {
  hello = hello.toLowerCase();

  if(hello === 'yes'|| hello === 'y')
  {
    alert('gee ' + user + ' thats a great attitude');
    guesses++;
  } else {
    alert('sucks to be you ' + user + ' ...have fun!');}
  console.log('the answer was yes, there was never a choice.');
}
gGame1();

function gGame2() {
  var age = prompt('So ' + user + ' Am I 26?');

  age = age.toLowerCase();

  if(age === 'yes' || age === 'y') {
    console.log( 'yes I am 26');

    alert('Thats right! ' + user + ' Good guess');
    guesses++;
  } else {
    alert('Nope ' + user + ' I am 26! Thank you very much');
  }
}
gGame2();

function gGame3() {
  var favec = prompt('Do you think hotpink is my favorite color?');
  favec = favec.toLowerCase();

  if(favec === 'no' || favec === 'n') {
    alert('Thats right ' + user + ' Green is my favorite color');
  } else {
    alert('Sorry ' + user + ' The only hot-pink I like is starbursts');
  }
  console.log('No I do not like pink');
}
gGame3();

function gGame4() {

  var anime = prompt('Have I seen over 100 different Japanese anime?');
  anime = anime.toLowerCase();

  if(anime === 'yes' || anime === 'y') {
    alert('Yeaaahhhhhh I will be honest ' + user + ' I would not reccomend even half of them');
    guesses++;
  } else {
    alert( user + ' I have seen more terrible anime then I care to confess');
  }
  console.log('Yes I have seen over 100 anime');
}
gGame4();

function gGame5() {

  var pet = prompt('Dog I have a dog?');
  pet = pet.toLocaleLowerCase();

  if(pet === 'no' || pet === 'n') {
    alert('Your right, I have a cat!');
  } else {
    alert('You guessed wrong, a dog needs more room and attention then I can give.');
    console.log('No, I do not have a dog');
  }
}
gGame5();

function gGame6() {
  var attempt = 4;
  var q6answer = 0;
  for(attempt = 0; attempt < 4; attempt++) {
    var guess = prompt('I am thinking of a number that is Ten or less, take 4 chances to see if you can guess it!');
    guess = Math.sign(guess);
    console.log(guess );
    if (guess === q6answer){
      alert('Thats right! Us coders start at zero');
      guesses++;
      break;
    } else if(guess < 0) {
      alert('Too low, try looking around positive intergers');
    } else {
      alert('You are guessing too high, try toward the beginning');
    }
  }
}

gGame6();

function gGame7() {

  var favanime =['berserk','dororo', 'cowboy bebop','kekkai sensen','devilman crybaby' ];
  var q7answer = 0;
  var q7wrong = false;

  while (q7answer<6 && !q7wrong){
    var q7 = prompt('I love watching anime, why don \'t you take a crack at guessing what one of my favorites might be').toLocaleLowerCase();
    for (var i=0; i< favanime.length; i++){
      if (q7 === favanime[i]){
        console.log('You got it correct');
        q7wrong = true;
        i = favanime.length;
      }
    }

    if(!q7wrong){
      alert('You failed, shameful display');
      q7answer++;
    } else if (q7wrong){
      alert('You guessed right! good job');
      guesses++;
    }
  }
}
gGame7();

alert('Well ' + user + ' I hope you had fun getting to know me! ' + guesses + ' out of 7');