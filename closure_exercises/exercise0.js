
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
