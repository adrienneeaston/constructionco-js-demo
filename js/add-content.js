var userName = prompt('What is your name?');
document.write('<h3>Hello ' + userName + '!</h3>');

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = 'Good evening!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

var response = prompt('Would you like a house or a hotel?');
var item;

if (response === 'house') {
  item = '<img src ="images/house.png">';
} else if (response === 'hotel') {
  item = '<img src ="images/hotel.png">';
} else {
  item = 'No house or hotel for you!';
}

document.write('<p>' + item + '</p>');