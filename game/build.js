

newGame();

function newGame() {
  var width = 5,
      height = 5,
      distanceTraveled = 0,
      gameBox = document.querySelector('.game-grid');

  var startX = parseInt(Math.random() * width);
  var startY = parseInt(Math.random() * height);
  var character = { x: startX, y: startY };

  buildGrid(gameBox, width, height);
  setupResetGame(character, startX, startY, distanceTraveled);
  placeCharacter(character);

  control(character, width, height, distanceTraveled);
}

function buildGrid(container, width, height) {
  for (var i = 0; i < height; i++) {
    var newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.classList.add('row' + i);
    container.appendChild(newRow);

    addTilesToRow(newRow, width);
  }
}

function addTilesToRow(row, quantity) {
  for (var i = 0; i < quantity; i++) {
    var newTile = document.createElement('div');
    newTile.classList.add('tile');
    newTile.classList.add('column' + i);
    row.appendChild(newTile);
  }
}


function setupResetGame(character, startX, startY, distanceTraveled) {
  var resetGameButton = document.querySelector('button[name=reset-game]');
  resetGameButton.addEventListener('click', function(event) {
    placeCharacter(character, { 'x': startX, 'y': startY });

    distanceTraveled = 0;
    updateDistanceWalked(distanceTraveled);
    // need to reset teleporter, time machine
  });

}
