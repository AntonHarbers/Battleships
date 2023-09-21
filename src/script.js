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

const player1 = new Player(playerNameInput.value, true, player1board);
const player2 = new Player("Computer", false, player2board);

playerNameInput.value = "Tony";

let shipPlacementPhase = false;
let shipRotationHorizontal = true;

startGameButton.addEventListener("click", () => {
  StartGame();
});

playerShipRotationBtn.addEventListener("click", () => {
  changeShipRotation();
});

document.addEventListener("keydown", (e) => {
  if(e.key == "r"){
    if(shipPlacementPhase){
      changeShipRotation();
    }
  }
})

const changeShipRotation = () => {
  shipRotationHorizontal = !shipRotationHorizontal;

  playerShipRotationBtn.textContent = `Rotation: ${shipRotationHorizontal ? "Horizontal":"Vertical"}`
}

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

  // start player ships placement phase
  player1.ships.forEach((ship) => {
    const option = document.createElement('option');
    option.text = ship.name;
    playerShipSelect.add(option);
  })

  shipPlacementPhase = true;
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

const placeShipsRandomly = (player, isComputer) => {
  player.ships.forEach((ship, index) => {
    const coordinates = findPossibleShipCoordinates(player.gameboard, ship);
    let element = null;
    let squareClass = isComputer ? "computerSquare" : "playerSquare";

    for (var i = 0; i < ship.length; i++) {
      if (coordinates[2]) {
        player.gameboard.board[coordinates[0] + i][coordinates[1]] = ship.name;
        // is horizontal
        element = document.querySelector(
          `[data-x="${coordinates[0] + i}"][data-y="${
            coordinates[1]
          }"].${squareClass}`
        );
      } else {
        player.gameboard.board[coordinates[0]][coordinates[1] + i] = ship.name;

        // is vertical
        element = document.querySelector(
          `[data-x="${coordinates[0]}"][data-y="${
            coordinates[1] + i
          }"].${squareClass}`
        );
      }

      // element.classList.add("red");
    }
    player.activeShips.push(ship);
  });
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
    x = Math.floor(Math.random() * gridSize);
    y = Math.floor(Math.random() * gridSize);

    if (isHorizontal) {
      x > gridSize - ship.length ? (x = x - ship.length) : (x = x);

      for (var i = 0; i < ship.length; i++) {
        if (board.board[x + i][y] !== "Empty") {
          freePositionFound = false;
        }
      }
    } else {
      y > gridSize - ship.length ? (y = y - ship.length) : (y = y);

      for (var i = 0; i < ship.length; i++) {
        if (board.board[x][y + i] !== "Empty") {
          freePositionFound = false;
        }
      }
    }
  }

  return [x, y, isHorizontal];
};

const placeShipDuringPlacementPhase = (player) => {
  if(shipPlacementPhase){

  }else{
    return;
  }
}
