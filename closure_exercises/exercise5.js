
// Generate another function that requires arguments.
// This time you'll have to set up the flyTo variable yourself.

var personToVisit = "best friend";
var flyTo = getflyToOutput(personToVisit);
// YOUR CODE HERE ------------------------
function getflyToOutput(string){
  return function(location){
    console.log("Enjoy your visit to " + location + "to visit " + string);
  }
}


// ---------------------------------------

flyTo("Shanghai");
// Enjoy your visit to Shanghai to visit your best friend.
personToVisit = "Toronto"; // (has no effect on next method call)
flyTo("Lagos");
// Enjoy your visit to Lagos to visit your best friend.
