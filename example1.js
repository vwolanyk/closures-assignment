
// we're now using a callback to call a function of choice. Notice that we

// let's say we need a function to pass to addEventListener()
// can't use parameters
function performEvent(func) {
  func();
}

function printNumber() {
  console.log(i);
}


for (var i=0; i<5; i++) {
  performEvent(printNumber);
}
