import { Ship, Gameboard, Player } from './battleships.js';

const gridSize = 10;
const shipNames = [
    'Carrier',
    'Battleship',
    'Cruiser',
    'Submarine',
    'Destroyer',
  ];
  const shipLengths = [5, 4, 3, 2, 2];

let player1 = null;
let player2 = null;
let player1board = null;
let player2board = null;

const playerTurnDiv = document.getElementById('player-turn');
const computerTurnDiv = document.getElementById('computer-turn');
const startGameButton = document.querySelector('#start-game-btn');
const menuScreen = document.querySelector('#menu-screen');
const gameScreen = document.querySelector('#game-screen');
const playerNameInput = document.querySelector('#player-name-input');
const playerNameStat = document.querySelector('#player-name-stat');

startGameButton.addEventListener('click', () => {
    StartGame();
  });
  

const StartGame = () => {
  if (playerNameInput.value == '') {
    alert('Please enter a name');
    return;
  }

  player1board = new Gameboard(false);
  player2board = new Gameboard(true);

  player1 = new Player(playerNameInput.value, true, player1board);
  playerNameStat.textContent = player1.name;
  player2 = new Player('Computer', false, player2board);

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

  if (isComputer) {
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
  let freeSpotFound = true;
  let x = 0;
  let y = 0;

  while (freeSpotFound) {
    y = Math.floor(Math.random() * gridSize);
    x = Math.floor(Math.random() * (gridSize - ship.length));

    if (placeHorizontal) {
      for (var i = 0; i < ship.length; i++) {
        if (board[x + i][y] != 'Empty') {
          freeSpotFound = false;
        }
      }
    } else {
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
