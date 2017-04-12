
var listElements = document.querySelectorAll('li');
var secretMessages = [
  "I'll be in the clock tower at midnight.",
  "The object of interest is in the museum.",
  "We are progressing you to the next level. Congratulations.",
];

for (var index = 0; index < listElements.length; index++) {
  var listElement = listElements[index];
  listElement.addEventListener('click', getClickHandler(index));
}

function getClickHandler(index) {
  return function() {
    console.log(this.innerHTML);
    console.log(index);
    console.log(secretMessages[index]);
  };
}
