'use strict';

var user = prompt('Hello! who are you?');
console.log('user'+ user);

var hello = prompt('hey, ' + user + ' ready to know me better? ');

hello = hello.toLowerCase();

if(hello === 'yes'|| hello === 'y')
 {
  alert('gee' + user + 'thats a great attitude');
} else {
  alert('sucks to be you ' + user + ' ...have fun!');
//console.log('the answer was yes, there was never a choice.')
var age = prompt('So ' + user + ' Am I 26?')

  age = age.toLowerCase();

  if(age === 'yes' || age === 'y')
  //console.log( 'yes I am 26');
   {
    alert('Thats right! ' + user + ' Good guess');
  } else {
    alert('Nope ' + user + ' I am 26! Thank you very much');

    var favec = prompt('Do you think hotpink is my favorite color?')
    favec = favec.toLowerCase();

if(favec === 'no' || favec === 'n') {
  alert('Thats right ' + user + ' Green is my favorite color');
} else {
  alert('Sorry ' + user + ' The only hot-pink I like is starbursts');
  //console.log('No I do not like pink')


  var anime = prompt('Have I seen over 100 different Japanese anime?')
  anime = anime.toLowerCase();

if(anime === 'yes' anime === 'y') {
  alert('Yeaaahhhhhh I will be honest ' + user + ' I would not reccomend even half of them);
} else {
  alert( user + ' I have seen more terrible anime then I care to confess');
  //console.log('Yes I have seen over 100 anime')

  var pet = prompt('Dog I have a dog?')
  pet = pet.toLocaleLowerCase();

  if(pet === 'no' || pet === 'n') {
      alert('Your right, I have a cat!');
    } else {
        alert('You guessed wrong, a dog needs more room and attention then I can give.');
        //console.log('No, I do not have a dog')
  }
alert('Well ' + user + ' I hope you had fun getting to know me!' )