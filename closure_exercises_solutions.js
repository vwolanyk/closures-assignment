
var message = "Hello world!";
var helloWorld = getPrintFunction(message);

// You will have to fill in the below section on the other exercises.
// Here we've filled it in to give you an idea of the code you'll have to write.
// The important parts are: creating a function, and inside of that, returning another function that does what we want.
// ----------------------------------------
function getPrintFunction(message) {
  var message = "Hello world!";
  return function() {
    console.log(message);
  }
}
// ----------------------------------------

helloWorld(); // Hello world!
message = "something else";
helloWorld(); // Hello world!






// Closure example that involves an argument
var printNumberThree = getPrintNumberFunction(3);
var printNumberFive = getPrintNumberFunction(5);

// YOUR CODE HERE ------------------------

function getPrintNumberFunction(number) {
  return function() {
    console.log(number);
  }
}
// ---------------------------------------

printNumberThree(); // 3
printNumberFive(); // 5






// This example proves that the data in the closure is protected from the outside.
// You'll have to set up a variable called tellFavouriteMovie to be a function that remembers the value "The Matrix".
// If you're stuck, check the previous exercise!
var movie = "The Matrix";

// YOUR CODE HERE ------------------------
var tellFavouriteMovie = getFavouriteMovie(movie);

function getFavouriteMovie(movieName) {
  return function() {
    console.log(movieName);
  }
}
// ---------------------------------------

tellFavouriteMovie(); // The Matrix
movie = "Primer"; // (has no effect on next method call)
tellFavouriteMovie(); // The Matrix








// Multiple arguments!

var sandwiches = 2,
    burgers = 3;

var theUsual = getUsualOrderFunction(2, 3);
// YOUR CODE HERE ------------------------
function getUsualOrderFunction(sandwiches, burgers) {
  return function() {
    console.log("We'll get " + sandwiches + " sandwiches and " + burgers + " burgers.");
  }
}
// ---------------------------------------

theUsual(); // We'll get 2 sandwiches and 3 burgers.
sandwiches = 0;
burgers = 1;
theUsual(); // We'll get 2 sandwiches and 3 burgers.








// Generate a function that requires arguments.
// Notice that the examples at the end are also passing arguments!
// How many parameters do the outer and inner functions each need?

var recipient = "Devon";
var sendNote = getSendNoteFunction(recipient);
// YOUR CODE HERE ------------------------

function getSendNoteFunction(recipient) {
  return function(message) {
    console.log("Dear " + recipient + ",\n" + message);
  }
}
// ---------------------------------------

sendNote("I hope you are well!");
// Dear Devon,
// I hope you are well!
recipient = "Mark";
sendNote("You are cordially invited...");
// Dear Devon,
// You are cordially invited...








// Generate another function that requires arguments.
// This time you'll have to set up the flyTo variable yourself.

var personToVisit = "best friend";
// YOUR CODE HERE ------------------------
var flyTo = getFlyToCityFunction(personToVisit);

function getFlyToCityFunction(person) {
  return function(targetCity) {
    console.log("Enjoy your visit to " + targetCity + " to visit your " + person + ".");
    // console.log("Dear " + personToVisit + ",\n" + city);
  }
}
// ---------------------------------------

flyTo("Shanghai");
// Enjoy your visit to Shanghai to visit your best friend.
personToVisit = "Toronto"; // (has no effect on next method call)
flyTo("Lagos");
// Enjoy your visit to Lagos to visit your best friend.








// Advanced - closures and mutable data structures

var person = {
  'name': 'Kiera',
  'age': 27,
};

var printPerson = getPersonFunction(person);

function getPersonFunction(person) {
  return function() {
    console.log(person.name + ", age " + person.age);
  }
}

printPerson(); // Kiera, age 27
person.age += 1;
printPerson(); // Kiera, age 28 <-- notice the change!!!
