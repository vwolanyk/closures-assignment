
function getAlertClickHandler(message) { //
  function alertWithMessage() {
    alert(message);
  }
  return alertWithMessage;
}

var h1 = document.querySelector('h1');
var paragraph = document.querySelector('p');

// set a secret message, get a click handler that uses that message, and set the event listener
var secretMessage = "I'll be in the clock tower at midnight.";
var firstMessageClickHandler = getAlertClickHandler(secretMessage);
h1.addEventListener('click', firstMessageClickHandler);

// set a secret message, get a click handler that uses that message, and set the event listener
secretMessage = "The object of interest is in the museum.";
var secondMessageClickHandler = getAlertClickHandler(secretMessage);
paragraph.addEventListener('click', secondMessageClickHandler);
