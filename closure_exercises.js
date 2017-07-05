
// Most basic closure example -- no arguments (but kind of pointless)
var helloWorld = getHelloWorldFunction();

// FILL THIS IN --------------------------
// HINT: look below to see how the function is being used. You need to make the below code work as indicated.
function getHelloWorldFunction() {
  var message = "Hello world!";
  return function() {
    console.log(message);
  }
}
// ---------------------------------------

helloWorld(); // Hello world!
message = "Goodbye!";
helloWorld(); // Hello world!






// Closure example that involves an argument
var number = 3;
var printNumber = getPrintNumberFunction(number);

// FILL THIS IN --------------------------

function getPrintNumberFunction(number) {
  return function() {
    console.log(number);
  }
}
// ---------------------------------------

printNumber(); // 3
number = 5;
printNumber(); // 3






// Another closure example that involves an argument
var movie = "The Matrix";
// Note that you will have to

// FILL THIS IN --------------------------
var tellFavouriteMovie = getFavouriteMovie(movie);

function getFavouriteMovie(movieName) {
  return function() {
    console.log(movieName);
  }
}
// ---------------------------------------

tellFavouriteMovie(); // The Matrix
movie = "Primer";
tellFavouriteMovie(); // The Matrix








// Multiple arguments

var sandwiches = 2,
    burgers = 3;

// FILL THIS IN --------------------------
var theUsual = getUsualOrderFunction(sandwiches, burgers);
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








// Generate a function that requires arguments

var recipient = "Devon";
var sendNote = getSendNoteFunction(recipient);
// FILL THIS IN --------------------------

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








// Generate a function that requires arguments

var personToVisit = "best friend";
// FILL THIS IN --------------------------
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
personToVisit = "Shanghai";
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
