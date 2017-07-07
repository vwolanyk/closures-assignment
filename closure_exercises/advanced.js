
var clickCounter = document.querySelector('#clickCountButton');
console.log(clickCounter);
clickCounter.addEventListener('click', getClickCountHandler());

// Goal: alert the user how many times the button is clicked.
// Eg. the first time it's clicked, it should output:
// You have clicked this button 1 times.


// Problem 1: fill in this function
function getClickCountHandler() {
  var count = 0;
  return function() {
    count += 1;
    alert("You have clicked this button " + count + " times.")
  }
}



document.addEventListener('keydown', getSecretKeyCodeEventHandler());

// Goal: we want to generate a secret code by pressing buttons. When we are ready, we press Enter to see the code on the screen.

// Eg. reloading the page (for a fresh start), then pressing a, b, c, d, then Enter, should result in an alert that says:
// 65,66,67,68,13

// Note that an event handler will get passed an 'event' object. You'll need to have a parameter in order to accept the argument.
// To determine the 'code' of the pressed key, you will have to ask for the event's keyCode.
// ie. if the parameter is called event, then write: event.keyCode
// Also note that the keycode for Enter is 13

function getSecretKeyCodeEventHandler() {
  // FILL THIS IN
  var secretCode = [];
  return function(event) {
    secretCode.push(event.keyCode);
    if (event.keyCode === 13) { // detect the Enter button
      alert(secretCode);
    }
  }
}
