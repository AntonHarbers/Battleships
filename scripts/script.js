import { Ship, Gameboard, Player, gridSize } from './battleships.js';

const playerTurnDiv = document.getElementById('player-turn');
const computerTurnDiv = document.getElementById('computer-turn');
const startGameButton = document.querySelector('#start-game-btn');
const menuScreen = document.querySelector('#menu-screen');
const gameScreen = document.querySelector('#game-screen');
const playerNameInput = document.querySelector('#player-name-input');
const playerNameStat = document.querySelector('#player-name-stat');

const shipNames = [
  'Carrier',
  'Battleship',
  'Cruiser',
  'Submarine',
  'Destroyer',
];
const shipLengths = [5, 4, 3, 2, 2];

const player1board = new Gameboard(false);
const player2board = new Gameboard(true);

const player1 = new Player(playerNameInput.value, true, player1board);;
const player2 = new Player('Computer', false, player2board);;

startGameButton.addEventListener('click', () => {
  StartGame();
});

const StartGame = () => {
  if (playerNameInput.value == '') {
    alert('Please enter a name');
    return;
  }

  player1.name = playerNameInput.value;
  playerNameStat.textContent = player1.name;

  menuScreen.style.display = 'none';
  gameScreen.style.display = 'flex';

  player1board.renderBoard();
  player2board.renderBoard();

  spawnShipsRandomly(player1board, player2);
  spawnShipsRandomly(player2board, player1);

  updateTurnUi();
};

const squareEvent = (square, isComputer, x, y) => {
  // check that player who is not owner is clicking
  console.log(square.id);
  console.log(isComputer);

  let coordinates = square.id.split(",");
  x = parseInt(coordinates[0]);
  y = parseInt(coordinates[1]);

  if (isComputer) {
    console.log(player2board);
    console.log(player2board.board[x][y]);
  }
  updateTurnUi();
};

const updateTurnUi = () => {
  if (player1.isTurn) {
    playerTurnDiv.hidden = false;
    computerTurnDiv.hidden = true;
  } else {
    computerTurnDiv.hidden = true;
    playerTurnDiv.hidden = false;
  }
};

const spawnShipsRandomly = (gameboard, player) => {
  player.ships.forEach((ship) => {
    // place the ship on the gameboard randomly within the bounds of the board
    const placeHorizontal = Math.random() * 10 >= 5 ? true : false;
    let x = 0;
    let y = 0;

    const coordinates = findFreeSpot(gameboard.board, placeHorizontal, ship);

    gameboard.placeShip(
      ship.name,
      ship.length,
      coordinates[0],
      coordinates[1],
      placeHorizontal
    );
    // add ship to the players placed ships array

    player.activeShips.push(ship);

    // after this forloop empty the ships array
  });

  player.ships = [];
};

const findFreeSpot = (board, placeHorizontal, ship) => {
  let freeSpotFound = false;
  let x = 0;
  let y = 0;

  while (!freeSpotFound) {
    if (placeHorizontal) {
      y = Math.floor(Math.random() * gridSize);
      x = Math.floor(Math.random() * (gridSize - ship.length));
      freeSpotFound = true;
      for (var i = 0; i < ship.length; i++) {
        if (board[x + i][y] != 'Empty') {
          freeSpotFound = false;
        }
      }
    } else {
      y = Math.floor(Math.random() * (gridSize - ship.length));
      x = Math.floor(Math.random() * gridSize);
      freeSpotFound = true;
      for (var i = 0; i < ship.length; i++) {
        if (board[x][y + i] != 'Empty') {
          freeSpotFound = false;
        }
      }
    }
  }

  console.log([x, y]);

  return [x, y];
};

export { squareEvent };
