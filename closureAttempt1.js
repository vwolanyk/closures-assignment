
function alertWithMessage() {
  alert(secretMessage); // note that secretMessage is not set here
}

var h1 = document.querySelector('h1');
var paragraph = document.querySelector('p');

var secretMessage = "I'll be in the clock tower at midnight.";
h1.addEventListener('click', alertWithMessage);

secretMessage = "The object of interest is in the museum.";
paragraph.addEventListener('click', alertWithMessage);
