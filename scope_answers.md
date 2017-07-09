**Exercise 1**

_Variables_


A) // welcome

- because lastWord is defined as 'Welcome' before the console.log is called and then changed after but not logged to the console


B) // Up here!

- because the variable message is available to the shout function and the shout function was called


C) // two dozen

- because purchasedMuffins was declared as variable and assigned a value of the getMuffins function so purchasedMuffins executes the getmuffins funciton which returns the value of muffins


D)// sneak out

- because the value of chore available to the reportActivity function is the one defined inside the doChores function


E) //looking for gold

- because although the changeContents function was called it didn;t do anything to the contents variable available to getMail so it returns the original value of contents.


F) firstIdea();// return value but not logged =  "Buy a new car"
secondIdea();// nothing or 'undefined'

_Exercise 2_


1. // error - no such variable

NEW CODE:

var address;

function buildHouse(newaddress) {
  // ... house gets built
  address = newaddress;
  return 'Building house at ' + address;

}
buildHouse('123 Happy St.');
console.log(address);


2.

var determined = false;
var smoothie = "undecided"
if (determined) {
  smoothie = 'strawberry banana';
}
console.log(smoothie);


3.

function indexNum(){
for (index = 0; index < 5; index++) {
  // ...
};
};


console.log(index);


4.

for (var index = 0; index < items.length; index++){
  var lastItem = items[index];
};

console.log(lastItem);
