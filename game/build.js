
var width = 5,
    height = 5,
    gameBox = document.querySelector('.game-grid');



var character = { x: 0, y: 0 };

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

moveCharacter(character);
