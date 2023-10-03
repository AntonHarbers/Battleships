import './styles/styles.css';
import {
  playerTurnDiv,
  computerTurnDiv,
  startGameButton,
  menuScreen,
  gameScreen,
  playerNameInput,
  playerNameStat,
  playerBoard,
  computerBoard,
  playerShipSelect,
  playerShipRotationBtn,
  gridSize,
  player1board,
  player2board,
  player1,
  player2,
} from './vars.js';
import { renderBoards } from './rendering';
import { IsPositionFree, placeShipsRandomly } from './helpers';

// Variables
let playerSquares = [];
let computerSquares = [];

let shipPlacementPhase = false;
let gamePhase = false;
let shipRotationHorizontal = true;
let firstShipHitCoords = null;
let shipHitCoords = null;
let currentHitDirection = 'up';

// remove before production
playerNameInput.value = 'Tony';

// event listeners
startGameButton.addEventListener('click', () => {
  StartGame();
});

playerShipRotationBtn.addEventListener('click', () => {
  changeShipRotation();
});

document.addEventListener('keydown', (e) => {
  if (e.key == 'r') {
    if (shipPlacementPhase) {
      changeShipRotation();
      playerSquares.forEach((square) => {
        square.classList.remove('red');
      });
    }
  }
});

// game logic
const StartGame = () => {
  if (playerNameInput.value == '') {
    alert('Please enter a name');
    return;
  }

  player1.name = playerNameInput.value;
  playerNameStat.textContent = player1.name;
  menuScreen.style.display = 'none';
  gameScreen.style.display = 'flex';

  renderBoards();
  placeShipsRandomly(player2, gridSize);
  playerSquares = document.querySelectorAll('.playerSquare');
  computerSquares = document.querySelectorAll('.computerSquare');

  // start player ships placement phase

  shipPlacementPhase = true;

  player1.ships.forEach((ship) => {
    const option = document.createElement('option');
    option.text = ship.name;
    option.value = ship.name;
    playerShipSelect.add(option);
  });

  playerSquares.forEach((square) => {
    const x = parseInt(square.getAttribute('data-x'));
    const y = parseInt(square.getAttribute('data-y'));

    square.addEventListener('mouseenter', () => {
      handlePlayerSquareMouseEnter(x, y);
    });

    square.addEventListener('mousedown', () => {
      handlePlayerSquareMouseDown(x, y);
    });

    square.addEventListener('mouseleave', () => {
      handlePlayerSquareMouseLeave(x, y, playerSquares, shipPlacementPhase);
    });
  });

  computerSquares.forEach((square) => {
    const x = parseInt(square.getAttribute('data-x'));
    const y = parseInt(square.getAttribute('data-y'));

    square.addEventListener('mousedown', () => {
      handleComputerSquareMouseDown(x, y);
    });
  });
};

const EndPlacementPhase = () => {
  shipPlacementPhase = false;
  playerShipRotationBtn.remove();
  playerShipSelect.remove();
  gamePhase = true;
  player1.isTurn = false; //Math.random() * 10 > 5 ? true : false;
  if (!player1.isTurn) {
    player2.isTurn = true;
    var index = 0;
    let incrementEveryHalfSecond = setInterval(function () {
      index++;
      makeComputerMove();
      if (index == 75) clearInterval(incrementEveryHalfSecond);
    }, 500);
  } else {
    player2.isTurn = false;
    // player attack ui change
  }
};

// attack logic

const makeComputerMove = () => {
  // see if last move was a hit
  let attackX;
  let attackY;

  if (shipHitCoords !== null) {
    console.log(shipHitCoords);

    [attackX, attackY] = shipHitCoords;

    const checkAttackCoords = (x, y) => {
      return (
        x < 0 ||
        x >= gridSize ||
        y < 0 ||
        y >= gridSize ||
        player2.coordinatesAttacked.some(
          (pos) => JSON.stringify(pos) === JSON.stringify([x, y])
        )
      );
    };

    const getNextAttackCoords = (x, y) => {
      switch (currentHitDirection) {
        case 'up':
          y--;
          if (checkAttackCoords(x, y)) {
            currentHitDirection = 'down';
            y++;
          }
          break;
        case 'down':
          y++;
          if (checkAttackCoords(x, y)) {
            currentHitDirection = 'left';
            y--;
          }
          break;
        case 'left':
          x--;
          if (checkAttackCoords(x, y)) {
            currentHitDirection = 'right';
            x++;
          }
          break;
        case 'right':
          x++;
          if (checkAttackCoords(x, y)) {
            currentHitDirection = 'up';
            x--;
          }
          break;
      }
      return [x, y];
    };

    let hasFoundGoodAttackCoords = false;
    let i = 0;

    while (!hasFoundGoodAttackCoords) {
      i++;
      if (i > 100) {
        shipHitCoords = null;
        firstShipHitCoords = null;
      }
      [attackX, attackY] = getNextAttackCoords(attackX, attackY);
      hasFoundGoodAttackCoords = !checkAttackCoords(attackX, attackY);

      if (!hasFoundGoodAttackCoords) {
        shipHitCoords = firstShipHitCoords;
        [attackX, attackY] = firstShipHitCoords;
      }
    }
  } else {
    const isAttackCoordsValid = (x, y) => {
      return (
        x >= 0 &&
        x < gridSize &&
        y >= 0 &&
        y < gridSize &&
        !player2.coordinatesAttacked.some(
          (pos) => JSON.stringify(pos) === JSON.stringify([x, y])
        )
      );
    };

    do {
      attackX = Math.floor(Math.random() * gridSize);
      attackY = Math.floor(Math.random() * gridSize);
    } while (!isAttackCoordsValid(attackX, attackY));
  }

  // attack that location
  player2.attackCoordinates(attackX, attackY);

  const squareAttacked = document.querySelector(
    `[data-x="${attackX}"][data-y="${attackY}"].playerSquare`
  );

  const isHit = (pos) =>
    JSON.stringify(pos) === JSON.stringify([attackX, attackY]);

  if (player2.enemyBoard.hitAttacks.some(isHit)) {
    HandleAttackHit(attackX, attackY, squareAttacked);
  }

  if (player2.enemyBoard.missedAttacks.some(isHit)) {
    HandleAttackMiss(attackX, attackY, squareAttacked);
  }
};

const HandleAttackHit = (x, y, squareHit) => {
  if (firstShipHitCoords == null) firstShipHitCoords = [x, y];
  shipHitCoords = [x, y];

  squareHit.classList.add('hit');

  if (player2.enemyBoard.board[x][y].sunk) {
    shipHitCoords = null;
    const randomDir = Math.random() * 100;
    switch (true) {
      case randomDir > 75:
        currentHitDirection = 'up';
        break;
      case randomDir <= 75 && randomDir > 50:
        currentHitDirection = 'down';
        break;
      case randomDir <= 50 && randomDir > 25:
        currentHitDirection = 'right';
        break;
      default:
        currentHitDirection = 'left';
        break;
    }
    firstShipHitCoords = null;
  }
};

const HandleAttackMiss = (x, y, squareMissed) => {
  squareMissed.classList.add('missed');
};

const changeShipRotation = () => {
  shipRotationHorizontal = !shipRotationHorizontal;

  playerShipRotationBtn.textContent = `Rotation: ${
    shipRotationHorizontal ? 'Horizontal' : 'Vertical'
  }`;

  playerSquares.forEach((square) => {
    square.classList.remove('red');
  });
};

// helper functions

const handlePlayerSquareMouseEnter = (x, y) => {
  if (!shipPlacementPhase) return;
  // figure out the length of the currently selected ship option
  let length;
  player1.ships.forEach((ship) => {
    if (ship.name == playerShipSelect.value) {
      length = ship.length;
    }
  });
  if (shipRotationHorizontal && x + length > gridSize) return;
  if (!shipRotationHorizontal && y + length > gridSize) return;
  let freePositionFound = IsPositionFree(
    x,
    y,
    length,
    shipRotationHorizontal,
    player1board
  );
  if (!freePositionFound) return;

  // highlight all the coordinates that would be occupied by the correct ship vertically or horizontally
  while (length > 0) {
    const squareInShip = document.querySelector(
      `[data-x="${shipRotationHorizontal ? x + length - 1 : x}"][data-y="${
        shipRotationHorizontal ? y : y + length - 1
      }"].playerSquare`
    );
    squareInShip.classList.add('red');
    length--;
  }
};

const handlePlayerSquareMouseDown = (x, y) => {
  if (!shipPlacementPhase) return;

  let length;
  let shipIndex;
  player1.ships.forEach((ship, index) => {
    if (ship.name == playerShipSelect.value) {
      length = ship.length;
      shipIndex = index;
    }
  });

  if (shipRotationHorizontal && x + length > gridSize) return;
  if (!shipRotationHorizontal && y + length > gridSize) return;
  let freePositionFound = IsPositionFree(
    x,
    y,
    length,
    shipRotationHorizontal,
    player1board
  );
  if (!freePositionFound) return;

  while (length > 0) {
    const squareInShip = document.querySelector(
      `[data-x="${shipRotationHorizontal ? x + length - 1 : x}"][data-y="${
        shipRotationHorizontal ? y : y + length - 1
      }"].playerSquare`
    );
    squareInShip.classList.add('ship');
    player1board.board[shipRotationHorizontal ? x + length - 1 : x][
      shipRotationHorizontal ? y : y + length - 1
    ] = player1.ships[shipIndex];
    length--;
  }

  const placedShip = player1.ships.splice(shipIndex, 1);
  player1.activeShips.push(placedShip);
  player1board.placeShip(
    placedShip[0].name,
    placedShip[0].length,
    x,
    y,
    shipRotationHorizontal
  );

  if (player1.ships.length == 0) {
    EndPlacementPhase();
  } else {
    playerShipSelect.remove(shipIndex);
    playerShipSelect.value = player1.ships[0].name;
  }
};
const handlePlayerSquareMouseLeave = (x, y) => {
  if (!shipPlacementPhase) return;

  playerSquares.forEach((square) => {
    square.classList.remove('red');
  });
};

const handleComputerSquareMouseDown = (x, y) => {
  if (!gamePhase) return;
  //if(!player1.isTurn) return;

  // check if its a hit
  // if its a miss make it a miss image
  // if its a hit make it a hit image
  // when the ship is sunk
  console.log(player2.gameboard.board[x][y]);
};
