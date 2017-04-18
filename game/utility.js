
function placeCharacter(character, newPosition) {
  if (newPosition === undefined) { newPosition = character; }

  var tiles = document.querySelectorAll('.tile');
  tiles.forEach(function(tile) {
    tile.classList.remove('here');
  });

  updateCharacterPosition(character, newPosition);
  var newTile = getTile(newPosition);
  newTile.classList.add('here');
}

function getTile(position) {
  var query = '.row' + position.y + ' .column' + position.x;
  return document.querySelector(query);
}

function updateCharacterPosition(character, newPosition) {
  character.x = newPosition.x;
  character.y = newPosition.y;
  // @TODO why not just do `character = newPosition`?
}

function updateDistanceWalked(distanceTraveled) {
  var distanceDisplay = document.querySelector('#distance');
  distanceDisplay.innerHTML = distanceTraveled + 'm';
}
