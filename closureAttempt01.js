
var listElements = document.querySelectorAll('li');

for (var index = 0; index < listElements.length; index++) {
  var listElement = listElements[index];
  listElement.addEventListener('click', function() {
    console.log(this.innerHTML);
    console.log(index + 1);
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
