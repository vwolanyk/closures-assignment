
// Closure example that involves an argument
var printNumberThree = getPrintNumberFunction(3);
var printNumberFive = getPrintNumberFunction(5);

// YOUR CODE HERE ------------------------
function getPrintNumberFunction(number){
  return function (){
    console.log(number);
  }
}


// ---------------------------------------

printNumberThree(); // 3
printNumberFive(); // 5
