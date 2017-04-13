
var width = 5,
    height = 5,
    gameBox = document.querySelector('#game-box');

var character = { x: 0, y: 0 };


for (var i = 0; i < height; i++) {
  // console.log('adding row', i);
  // var newRow = createDiv('row' + i);
  // gameBox.appendChild(newRow);
  var newRow = document.createElement('div');
  newRow.classList.add('row' + i);
  gameBox.appendChild(newRow);

  for (var j = 0; j < width; j++) {
    console.log('adding box', i, j);
    var newTile = document.createElement('div');
    newTile.classList.add('column' + j);
    newRow.appendChild(newTile);
  }
}

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
  moveCharacter(newPosition);
});

function getNewPosition(keyCode) {
  var newPosition = {x: character.x, y: character.y };
  if (keyCode === 37) {
    newPosition.x -= 1; // move left
  } else if(keyCode === 38) {
    newPosition.y -= 1; // move up
  } else if(keyCode === 39) {
    newPosition.x += 1; // move right
  } else if(keyCode === 40) {
    newPosition.y += 1; // move down
  }

  return newPosition;
}

function moveCharacter(newPosition) {
  console.log('rendering new position:');
  console.log(newPosition);
  updateCharacterPosition(newPosition);
  // get current position
  // remove marker from that div (just remove class)
  // add marker to new div (just add class)
}

function updateCharacterPosition(newPosition) {
  character.x = newPosition.x;
  character.y = newPosition.y;
}
