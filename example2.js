
function performDelayedEvent(func) {
  setTimeout(func, 500)
}

function printNumber() {
  console.log(i);
}

for (var i=0; i<5; i++) {
  performDelayedEvent(printNumber);
}
