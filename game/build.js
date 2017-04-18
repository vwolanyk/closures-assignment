
var width = 5,
    height = 5,
    distanceTraveled = 0,
    gameBox = document.querySelector('.game-grid');


var startX = parseInt(Math.random() * width);
var startY = parseInt(Math.random() * height);
var character = { x: startX, y: startY };

for (var i = 0; i < height; i++) {
  var newRow = document.createElement('div');
  newRow.classList.add('row');
  newRow.classList.add('row' + i);
  gameBox.appendChild(newRow);

  for (var j = 0; j < width; j++) {
    var newTile = document.createElement('div');
    newTile.classList.add('tile');
    newTile.classList.add('column' + j);
    newRow.appendChild(newTile);
  }
}

teleportCharacter(character);

var resetGameButton = document.querySelector('button[name=reset-game]');
resetGameButton.addEventListener('click', getResetGameFunction(startX, startY));

function getResetGameFunction(startX, startY) {
  return function() {
    teleportCharacter({ 'x': startX, 'y': startY });

    distanceTraveled = 0;
    updateDistanceTraveled();
  }
  // need to reset teleporter, time machine
}
