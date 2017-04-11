
var listElements = document.querySelectorAll('li');
var secretMessages = [
  "I'll be in the clock tower at midnight.",
  "The object of interest is in the museum.",
  "We are progressing you to the next level. Congratulations.",
];

for (var index = 0; index < listElements.length; index++) {
  var listElement = listElements[index];
  listElement.addEventListener('click', function() {
    console.log(this.innerHTML);
    console.log(index);
    console.log(secretMessages[index]);
  });
}

// // this example works
// listElements.forEach(function(element, index) {
//
//   element.addEventListener('click', function() {
//     console.log(this.innerHTML);
//     console.log(index + 1);
//   })
//
// });
