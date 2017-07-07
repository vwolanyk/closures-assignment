
// Generate a function that requires arguments.
// Notice that the examples at the end are also passing arguments!
// How many parameters do the outer and inner functions each need?

var recipient = "Devon";
var sendNote = getSendNoteFunction(recipient);
// YOUR CODE HERE ------------------------




// ---------------------------------------

sendNote("I hope you are well!");
// Dear Devon,
// I hope you are well!
recipient = "Mark"; // (no effect on next method call)
sendNote("You are cordially invited...");
// Dear Devon,
// You are cordially invited...
