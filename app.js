'use strict';

var user = prompt('Hello! who are you?');
console.log('user'+ user);

var hello = prompt('hey,' + user + 'ready to know me better? ');

hello = hello.toLowerCase();

if(hello === 'yes') {
  alert('gee thats a great attitude');
} else {
  alert('sucks.. have fun!');
}