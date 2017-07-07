
// This example proves that the data in the closure is protected from the outside.
// You'll have to set up a variable called tellFavouriteMovie to be a function that remembers the value "The Matrix".
// If you're stuck, check the previous exercise!
var movie = "The Matrix";

// YOUR CODE HERE ------------------------



// ---------------------------------------

tellFavouriteMovie(); // The Matrix
movie = "Primer"; // (has no effect on next method call)
tellFavouriteMovie(); // The Matrix
