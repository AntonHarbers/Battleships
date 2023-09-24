import "./styles/styles.css";
import { Gameboard, Player } from "./battleships.js";
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
} from "./vars.js";

const player1board = new Gameboard(false);
const player2board = new Gameboard(true);

const player1 = new Player(playerNameInput.value, true, player1board, player2board);
const player2 = new Player("Computer", false, player2board, player1board);

let playerSquares = [];
let computerSquares = [];

playerNameInput.value = "Tony";

let shipPlacementPhase = false;
let gamePhase = false;
let isPlayerTurn = false;
let shipRotationHorizontal = true;

let hitLastMove = false;
let hitLastTwoMoves = false;

startGameButton.addEventListener("click", () => {
  StartGame();
});

playerShipRotationBtn.addEventListener("click", () => {
  changeShipRotation();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "r") {
    if (shipPlacementPhase) {
      changeShipRotation();
      playerSquares.forEach((square) => {
        square.classList.remove("red");
      });
    }
  }
});

const changeShipRotation = () => {
  shipRotationHorizontal = !shipRotationHorizontal;

  playerShipRotationBtn.textContent = `Rotation: ${
    shipRotationHorizontal ? "Horizontal" : "Vertical"
  }`;

  playerSquares.forEach((square) => {
    square.classList.remove("red");
  });
};

const StartGame = () => {
  if (playerNameInput.value == "") {
    alert("Please enter a name");
    return;
  }

  player1.name = playerNameInput.value;
  playerNameStat.textContent = player1.name;
  menuScreen.style.display = "none";
  gameScreen.style.display = "flex";

  renderBoards();
  // place computers ships randomly
  placeShipsRandomly(player2, true);
  playerSquares = document.querySelectorAll(".playerSquare");
  computerSquares = document.querySelectorAll(".computerSquare");

  // start player ships placement phase
  player1.ships.forEach((ship) => {
    const option = document.createElement("option");
    option.text = ship.name;
    option.value = ship.name;
    playerShipSelect.add(option);
  });

  shipPlacementPhase = true;

  playerSquares.forEach((square) => {
    const x = parseInt(square.getAttribute("data-x"));
    const y = parseInt(square.getAttribute("data-y"));

    square.addEventListener("mouseenter", () => {
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
      let freePositionFound = IsPositionFree(x, y, length);
      if (!freePositionFound) return;

      // highlight all the coordinates that would be occupied by the correct ship vertically or horizontally
      while (length > 0) {
        const squareInShip = document.querySelector(
          `[data-x="${shipRotationHorizontal ? x + length - 1 : x}"][data-y="${
            shipRotationHorizontal ? y : y + length - 1
          }"].playerSquare`
        );
        squareInShip.classList.add("red");
        length--;
      }
    });

    square.addEventListener("mousedown", () => {
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
      let freePositionFound = IsPositionFree(x, y, length);
      if (!freePositionFound) return;

      while (length > 0) {
        const squareInShip = document.querySelector(
          `[data-x="${shipRotationHorizontal ? x + length - 1 : x}"][data-y="${
            shipRotationHorizontal ? y : y + length - 1
          }"].playerSquare`
        );
        squareInShip.classList.add("ship");
        player1board.board[shipRotationHorizontal ? x + length - 1 : x][
          shipRotationHorizontal ? y : y + length - 1
        ] = player1.ships[shipIndex];
        length--;
      }

      const placedShip = player1.ships.splice(shipIndex, 1);
      player1.activeShips.push(placedShip);
      player1board.placeShip(
        placedShip.name,
        placedShip.length,
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
    });

    square.addEventListener("mouseleave", () => {
      if (!shipPlacementPhase) return;

      playerSquares.forEach((square) => {
        square.classList.remove("red");
      });
    });
  });

  computerSquares.forEach((square) => {
    const x = parseInt(square.getAttribute("data-x"));
    const y = parseInt(square.getAttribute("data-y"));

    square.addEventListener("mousedown", () => {
      if (!gamePhase) return;
      //if(!isPlayerTurn) return;

      // check if its a hit
      // if its a miss make it a miss image
      // if its a hit make it a hit image
      // when the ship is sunk
      console.log(player2.gameboard.board[x][y]);
    });
  });
};

const EndPlacementPhase = () => {
  shipPlacementPhase = false;
  playerShipRotationBtn.remove();
  playerShipSelect.remove();
  gamePhase = true;
  isPlayerTurn = false//Math.random() * 10 > 5 ? true : false;
  if (!isPlayerTurn) {
    player2.isTurn = true;
    player1.isTurn = false;
    makeComputerMove();
  }{
    player2.isTurn = false;
    player1.isTurn = true;
    // player attack ui change
  }
};


const makeComputerMove = () => {
  // see if last move was a hit
  let x;
  let y;

  if (hitLastMove) {
    // try and go for an adjacent square
  } else if (hitLastTwoMoves) {
    // go into same direction as previous two moves
  } else {
    let foundPossibleAttackCoords = false;

    while (!foundPossibleAttackCoords) {
      x = Math.floor(Math.random() * gridSize);
      y = Math.floor(Math.random() * gridSize);
      foundPossibleAttackCoords = true;

      player2.coordinatesAttacked.forEach((coordinate) => {
        if (coordinate[0] == x && coordinate[1] == y) {
          foundPossibleAttackCoords = false;
        }
      });
    }
  }

  // attack that location

  player2.attackCoordinates(x, y);
  console.log([x,y]);
  console.log(player2.gameboard.board);
  console.log(player1.gameboard.board);

  // rerender the ui
  // play animations and sounds
  // set all the state
  // check if ship got sunk?

  // if ship is sunk reset hitlastmove variables

};

const IsPositionFree = (x, y, length) => {
  let checkX = x;
  let checkY = y;

  if (shipRotationHorizontal) {
    for (var i = 0; i < length; i++) {
      if (player1board.board[checkX + i][checkY] !== "Empty") {
        return false;
      }
    }
  } else {
    for (var i = 0; i < length; i++) {
      if (player1board.board[checkX][checkY + i] !== "Empty") {
        return false;
      }
    }
  }

  return true;
};

// render boards

const renderBoards = () => {
  playerBoard.innerHTML = "";
  computerBoard.innerHTML = "";

  renderBoard(player1board.board, false);
  renderBoard(player2board.board, true);
};

const renderBoard = (board, isComputer) => {
  for (var x = 0; x < board.length; x++) {
    for (var y = 0; y < board[x].length; y++) {
      var square = document.createElement("div");
      square.classList.add("square");
      square.classList.add(isComputer ? "computerSquare" : "playerSquare");
      square.dataset.x = x;
      square.dataset.y = y;

      if (isComputer) {
        computerBoard.appendChild(square.cloneNode(true));
      } else {
        playerBoard.appendChild(square.cloneNode(true));
      }
    }
  }
};

// ship placement

const placeShipsRandomly = (player) => {
  player.ships.forEach((ship) => {
    const coordinates = findPossibleShipCoordinates(player.gameboard, ship);

    player.gameboard.placeShip(
      ship.name,
      ship.length,
      coordinates[0],
      coordinates[1],
      coordinates[2]
    );

    player.activeShips.push(ship);
  });

  console.log(player.gameboard);
  player.ships = [];
};

const findPossibleShipCoordinates = (board, ship) => {
  var freePositionFound = false;
  let x = 0;
  let y = 0;
  var isHorizontal = false;

  while (!freePositionFound) {
    var isHorizontal = Math.round(Math.random() * 10) > 5 ? true : false;
    freePositionFound = true;
    x = Math.floor(
      Math.random() * (isHorizontal ? gridSize - ship.length : gridSize)
    );
    y = Math.floor(
      Math.random() * (isHorizontal ? gridSize : gridSize - ship.length)
    );

    if (isHorizontal) {
      for (var i = 0; i < ship.length; i++) {
        if (board.board[x + i][y] !== "Empty") {
          freePositionFound = false;
        }
      }
    } else {
      for (var i = 0; i < ship.length; i++) {
        if (board.board[x][y + i] !== "Empty") {
          freePositionFound = false;
        }
      }
    }
  }

  return [x, y, isHorizontal];
};
