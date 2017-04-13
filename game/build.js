
var width = 5,
    height = 5,
    gameBox = document.querySelector('#game-box');

var character = { x: 0, y: 0 };


for (var i = 0; i < height; i++) {
  // console.log('adding row', i);
  // var newRow = createDiv('row' + i);
  // gameBox.appendChild(newRow);
  var newRow = document.createElement('div');
  newRow.classList.add('row');
  newRow.classList.add('row' + i);
  gameBox.appendChild(newRow);

  for (var j = 0; j < width; j++) {
    console.log('adding box', i, j);
    var newTile = document.createElement('div');
    newTile.classList.add('tile');
    newTile.classList.add('column' + j);
    newRow.appendChild(newTile);
  }
}

moveCharacter(character);

function createDiv(parent, classes) {
  var newDiv = document.createElement('div');
  newDiv.classList.add(classes);
  // gameBox.appendChild(parent);
  return newDiv;
}

document.addEventListener('keydown', function(event) {
  console.log('key pressed');

  console.log(event.keyCode);
  var newPosition = getNewPosition(event.keyCode);
  if (!newPosition) { return; }
  moveCharacter(newPosition);
});

function getNewPosition(keyCode) {
  var newPosition = {x: character.x, y: character.y };
  if (keyCode === 37 || keyCode === 65) {
    newPosition.x -= 1; // move left
  } else if(keyCode === 38 || keyCode === 87) {
    newPosition.y -= 1; // move up
  } else if(keyCode === 39 || keyCode === 68) {
    newPosition.x += 1; // move right
  } else if(keyCode === 40 || keyCode === 83) {
    newPosition.y += 1; // move down
  }

  if (newPosition.x < 0 || newPosition.x >= width ||
      newPosition.y < 0 || newPosition.y >= height) {
    return false;
  }

  return newPosition;
}

function moveCharacter(newPosition) {
  var oldTile = getTile(character);
  oldTile.classList.remove('here');
  updateCharacterPosition(newPosition);
  var newTile = getTile(newPosition);
  newTile.classList.add('here');
}

function updateCharacterPosition(newPosition) {
  character.x = newPosition.x;
  character.y = newPosition.y;
}

function getTile(position) {
  var query = '.row' + position.y + ' .column' + position.x;
  console.log(query);
  return document.querySelector(query);
}
