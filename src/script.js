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
  gameOverSection,
  restartGaemButton,
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

restartGaemButton.addEventListener('click', () => {
  location.reload();
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

  playerTurnDiv.textContent = `Place your ships`;
  computerTurnDiv.textContent = '';

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
  player1.isTurn = Math.random() * 10 > 5 ? true : false;
  player2.isTurn = !player1.isTurn;
  NextTurn();
  UpdateTurnUI();
};

const UpdateTurnUI = () => {
  playerTurnDiv.style.display = player1.isTurn ? 'block' : 'none';
  computerTurnDiv.style.display = player2.isTurn ? 'block' : 'none';
  playerTurnDiv.textContent = player1.isTurn ? `Your turn` : '';
  computerTurnDiv.textContent = player1.isTurn ? '' : `Computer's turn`;
};

const NextTurn = () => {
  // check if game is over
  if (player1.enemyBoard.allShipsSunk()) {
    alert('Player wins');
    gameOverSection.style.display = 'flex';
    return;
  }
  if (player2.enemyBoard.allShipsSunk()) {
    alert('Computer wins');
    gameOverSection.style.display = 'flex';

    return;
  }

  if (player1.isTurn) {
    player1.isTurn = false;
    player2.isTurn = true;
    var index = 0;
    let incrementEveryHalfSecond = setInterval(function () {
      index++;
      if (index == 1) {
        makeComputerMove();
        clearInterval(incrementEveryHalfSecond);
      }
    }, 1000);
    let incrementNextTurn = setInterval(function () {
      NextTurn();
      clearInterval(incrementNextTurn);
    }, 2000);
  } else {
    player1.isTurn = true;
    player2.isTurn = false;
  }

  // change ui to show whos turn it is
  UpdateTurnUI();
};

// attack logic

const makeComputerMove = () => {
  // see if last move was a hit
  let attackX;
  let attackY;

  if (shipHitCoords !== null) {
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
  // play hit audio
  document.getElementById('boomAudio').play();
  if (firstShipHitCoords == null) firstShipHitCoords = [x, y];
  shipHitCoords = [x, y];

  squareHit.classList.add('hit');

  if (player2.enemyBoard.board[x][y].sunk) {
    setTimeout(() => {
      document.getElementById('sunkShipAudio').play();
    }, 100);
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
  // play miss audio
  document.getElementById('missAudio').play();
  squareMissed.classList.add('missed');
};

const HandlePlayerAttackHit = (x, y, squareHit) => {
  // play hit audio
  document.getElementById('boomAudio').play();
  squareHit.classList.add('hit');
};

const HandlePlayerAttackMiss = (x, y, squareMissed) => {
  // play miss audio
  document.getElementById('missAudio').play();
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

  let initLength = length;
  // highlight all the coordinates that would be occupied by the correct ship vertically or horizontally
  while (length > 0) {
    const squareInShip = document.querySelector(
      `[data-x="${shipRotationHorizontal ? x + length - 1 : x}"][data-y="${
        shipRotationHorizontal ? y : y + length - 1
      }"].playerSquare`
    );
    squareInShip.classList.add('red');

    // here we need to figure out which ship it is, then grab the image from the images folder, and overlay it on the correct squares

    if (length == 1) {
      // create a div, give it a class of ship, and append it to the first square, set the width and height to the correct size, and set the background image to the correct image
      const shipDiv = document.createElement('div');
      shipDiv.classList.add(playerShipSelect.value.toLowerCase());
      shipDiv.style.height = initLength * 50 + 'px';
      shipDiv.style.backgroundSize = `40px ${initLength * 50}px`;
      squareInShip.appendChild(shipDiv);
      // rotate ship if vertical
      if (!shipRotationHorizontal) {
        shipDiv.style.transform = 'rotate(90deg)';
        if (initLength == 5) {
          shipDiv.style.top = '-105px';
          shipDiv.style.left = '100px';
        } else if (initLength == 4) {
          shipDiv.style.top = '-80px';
          shipDiv.style.left = '75px';
        } else if (initLength == 3) {
          shipDiv.style.top = '-55px';
          shipDiv.style.left = '50px';
        } else {
          shipDiv.style.top = '-30px';
          shipDiv.style.left = '25px';
        }
      }
    }

    length--;
  }

  // if the ship is horizontal, set the width to 100px * length, and the height to 100px
  // if the ship is vertical, set the width to 100px, and the height to 100px * length
};

function RenderComputerShip(shipName, shipLength) {
  // find out the starting coords of the ship
  let x;
  let y;
  let isHorizontal = false;
  let shipFound = false;
  player1.enemyBoard.board.forEach((row, rowIndex) => {
    row.forEach((square, squareIndex) => {
      console.log(square, squareIndex);
      if (square.name == shipName && !shipFound) {
        shipFound = true;
        x = rowIndex;
        y = squareIndex;
      }
    });
  });

  // check if ship is horizontal or vertical by checking which direction the next square is in
  const squareRight = document.querySelector(
    `[data-x="${x + 1}"][data-y="${y}"].computerSquare`
  );

  if (squareRight && squareRight.classList.contains('hit')) {
    isHorizontal = true;
  } else {
    isHorizontal = false;
  }

  // highlight all the coordinates that would be occupied by the correct ship vertically or horizontally
  const squareInShip = document.querySelector(
    `[data-x="${x}"][data-y="${y}"].computerSquare`
  );

  // create a div, give it a class of ship, and append it to the first square, set the width and height to the correct size, and set the background image to the correct image
  const shipDiv = document.createElement('div');
  shipDiv.classList.add(`computer-${shipName.toLowerCase()}`);
  shipDiv.style.height = shipLength * 50 + 'px';
  shipDiv.style.backgroundSize = `50px ${shipLength * 50}px`;
  squareInShip.appendChild(shipDiv);
  // rotate ship if vertical
  if (!isHorizontal) {
    shipDiv.style.transform = 'rotate(90deg)';
    if (shipLength == 5) {
      shipDiv.style.top = '-105px';
      shipDiv.style.left = '100px';
    } else if (shipLength == 4) {
      shipDiv.style.top = '-80px';
      shipDiv.style.left = '75px';
    } else if (shipLength == 3) {
      shipDiv.style.top = '-55px';
      shipDiv.style.left = '50px';
    } else {
      shipDiv.style.top = '-30px';
      shipDiv.style.left = '25px';
    }
  }
}

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

  const currentShipHighlight = document.querySelector(
    `.${playerShipSelect.value.toLowerCase()}`
  );
  if (currentShipHighlight) {
    // destroy element

    currentShipHighlight.remove();
  }

  playerSquares.forEach((square) => {
    square.classList.remove('red');
  });
};

const handleComputerSquareMouseDown = (x, y) => {
  if (!gamePhase) return;
  if (!player1.isTurn) return;

  const isAttackCoordsValid = (x, y) => {
    return (
      x >= 0 &&
      x < gridSize &&
      y >= 0 &&
      y < gridSize &&
      !player1.coordinatesAttacked.some(
        (pos) => JSON.stringify(pos) === JSON.stringify([x, y])
      )
    );
  };

  if (!isAttackCoordsValid(x, y)) return;

  // check if hit or miss and color accordingly

  player1.attackCoordinates(x, y);

  const squareAttacked = document.querySelector(
    `[data-x="${x}"][data-y="${y}"].computerSquare`
  );

  const isHit = (pos) => JSON.stringify(pos) === JSON.stringify([x, y]);

  if (player1.enemyBoard.hitAttacks.some(isHit)) {
    HandlePlayerAttackHit(x, y, squareAttacked);

    const shipAttacked = player1.enemyBoard.board[x][y];

    let shipHitIsHorizontal = false;
    // check if ship is horizontal or vertical by checking which direction the next square is in
    const squareRight = document.querySelector(
      `[data-x="${x + 1}"][data-y="${y}"].computerSquare`
    );

    if (squareRight && squareRight.classList.contains('hit')) {
      shipHitIsHorizontal = true;
    } else {
      shipHitIsHorizontal = false;
    }

    if (shipAttacked.sunk) {
      // check if all ships are sunk
      RenderComputerShip(shipAttacked.name, shipAttacked.length);
      setTimeout(() => {
        document.getElementById('sunkShipAudio').play();
      }, 100);
    }
  }

  if (player1.enemyBoard.missedAttacks.some(isHit)) {
    HandlePlayerAttackMiss(x, y, squareAttacked);
  }

  // update ui

  // animation

  // play sounds
  NextTurn();
};
