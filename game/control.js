
document.addEventListener('keydown', function(event) {
  if (clickMenuButton(event.keyCode)) {
    return;
  }

  var newPosition = getNewPosition(event.keyCode);
  if (!newPosition) { return; }
  moveCharacter(newPosition);
});

var initializeTeleport = document.querySelector('button[name=initialize]');
initializeTeleport.addEventListener('click', function(event) {
  prepareTeleporter();
});

var initializeTimeMachine = document.querySelector('button[name=initialize-time-machine]');
initializeTimeMachine.addEventListener('click', function(event) {
  prepareTimeMachine();
});

function prepareTimeMachine() {
  console.log('preparing time machine');
  var location = { x: character.x, y: character.y };

  var button = document.querySelector('button[name=time-travel]');
  button.disabled = false;

  // @ASSIGNMENT - FILL THIS LINE IN (part 2) ----------
  button.addEventListener('click', getTimeTravelListener(location, distanceTraveled));
  // ------------------------------------------
}

// @ASSIGNMENT - CREATE THIS FUNCTION (part 2) ----------
function getTimeTravelListener(location, distance) {
  return function() {
    distanceTraveled = distance;
    teleportCharacter(location);
    updateDistanceTraveled();
  }
}
// ---------------------------------------------

function clickMenuButton(keyCode) {
  if (event.keyCode === 13) {
    document.querySelector('button[name=initialize]').click();
    return true;
  } else if (event.keyCode === 32) {
    document.querySelector('button[name=teleport]').click();
    return true;
  }
}

function prepareTeleporter() {
  var location = { x: character.x, y: character.y };

  removeActiveTeleporter(); // remove previously active teleporter
  addActiveTeleporter(location);

  var button = document.querySelector('button[name=teleport]');
  button.disabled = false;

  // @ASSIGNMENT - FILL THIS LINE IN ----------
  button.addEventListener('click', getTeleportListener(location));
  // ------------------------------------------
}

// @ASSIGNMENT - CREATE THIS FUNCTION ----------
function getTeleportListener(location) {
  return function() {
    teleportCharacter(location);
  }
}
// ---------------------------------------------

function removeActiveTeleporter() {
  var previouslyActive = document.querySelector('.active');
  if (previouslyActive) {
    previouslyActive.classList.remove('active');
  }
}

function addActiveTeleporter(location) {
  var tile = getTile(location);
  tile.classList.add('active');
}

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
  teleportCharacter(newPosition);
  addDistanceTraveled();
}

function teleportCharacter(newPosition) {
  var oldTile = getTile(character);
  oldTile.classList.remove('here');
  updateCharacterPosition(newPosition);
  var newTile = getTile(newPosition);
  newTile.classList.add('here');
}

function addDistanceTraveled() {
  distanceTraveled += 1;
  updateDistanceTraveled();
}

function updateDistanceTraveled() {
  var distanceDisplay = document.querySelector('#distance');
  distanceDisplay.innerHTML = distanceTraveled + 'm';
}

function updateCharacterPosition(newPosition) {
  character.x = newPosition.x;
  character.y = newPosition.y;
}

function getTile(position) {
  var query = '.row' + position.y + ' .column' + position.x;
  return document.querySelector(query);
}
