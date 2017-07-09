var lastWord = 'welcome';
console.log(lastWord);
lastWord = 'goodbye';

var message = "Up here!";

function shout() {
  console.log(message);
}

shout();

var muffins = 'two dozen';
var purchasedMuffins;

function getMuffins() {
  return muffins;
}
purchasedMuffins = getMuffins();
console.log(purchasedMuffins);


var chore = 'laundry';

function doChores() {
  var chore = 'sneak out';

  function reportActivity() {
    console.log(chore);
  }

  reportActivity();
}

doChores();


var letter;
var contents = 'Looking for gold';

function getMail() {

  function changeContents() {
    var contents = 'Struck it rich!';
  }

  changeContents();
  return contents;
}

letter = getMail();
console.log(letter);


var decision;

function firstIdea() {
  var decision = 'Buy a new car';
  return decision;
}

function secondIdea() {
  console.log(decision);
}

firstIdea();
secondIdea();


var determined = false;
var smoothie = "CHOCOBANANA"
if (determined) {
  smoothie = 'strawberry banana';
}
console.log(smoothie);

var index
function indexNum(){
for (index = 0; index < 5; index++) {
  // ...
};
};


console.log(index);


var items = ['glasses', 'toothpaste', 'wallet'];

// items.forEach(function(item) {
//   var lastItem = item;
// });

for (var index = 0; index < items.length; index++){
  var lastItem = items[index];
};

console.log(lastItem);
