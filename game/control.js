

function control(character, width, height, distanceTraveled) {

  document.addEventListener('keydown', function(event) {
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
    document.querySelector('.game-grid').classList.add('time-machine-prepared');

    // @ASSIGNMENT - FILL THIS LINE IN (part 2) ----------
    button.addEventListener('click', getTimeTravelListener(location, distanceTraveled));
    // ------------------------------------------
  }

  // @ASSIGNMENT - CREATE THIS FUNCTION (part 2) ----------
  function getTimeTravelListener(location, distance) {
    return function() {
      distanceTraveled = distance;
      placeCharacter(character, location);
      updateDistanceWalked(distanceTraveled);
    }
  }
  // ---------------------------------------------

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
      placeCharacter(character, location);
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
    } else {
      return false;
    }

    if (newPosition.x < 0 || newPosition.x >= width ||
        newPosition.y < 0 || newPosition.y >= height) {
      return false;
    }

    return newPosition;
  }

  function moveCharacter(newPosition) {
    placeCharacter(character, newPosition);
    addDistanceTraveled();
  }

  function addDistanceTraveled() {
    distanceTraveled += 1;
    updateDistanceWalked(distanceTraveled);
  }

  function updateCharacterPosition(newPosition) {
    character.x = newPosition.x;
    character.y = newPosition.y;
  }

}
