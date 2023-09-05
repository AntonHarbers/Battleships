const gridSize = 10;
const shipNames = [
  "Carrier",
  "Battleship",
  "Cruiser",
  "Submarine",
  "Destroyer",
];
const shipLengths = [5, 4, 3, 2, 2];

const startGameButton = document.querySelector("#start-game-btn");
const menuScreen = document.querySelector("#menu-screen");
const gameScreen = document.querySelector("#game-screen");
const playerNameInput = document.querySelector("#player-name-input");
const playerNameStat = document.querySelector("#player-name-stat");

class Ship {
  constructor(name, length) {
    (this.name = name),
      (this.length = length),
      (this.hits = 0),
      (this.sunk = false);
  }

  hit() {
    this.hits++;
    this.isSunk();
  }

  isSunk() {
    if (this.hits == this.length) {
      this.sunk = true;
    }
  }
}

class Gameboard {
  constructor() {
    this.board = new Array();
    this.ships = [];
    this.sunkShips = [];
    this.hitAttacks = [];
    this.missedAttacks = [];
    this.initBoard();
  }

  initBoard() {
    for (var x = 0; x < gridSize; x++) {
      this.board[x] = [];
      for (var y = 0; y < gridSize; y++) {
        this.board[x][y] = "Empty";
      }
    }
  }

  placeShip(name, length, x, y, isHorizontal) {
    for (var t = 0; t < length; t++) {
      if (
        this.board[isHorizontal ? x : x + t][isHorizontal ? y + t : y] !==
        "Empty"
      ) {
        return false;
      }
    }
    this.ships.push(new Ship(name, length));

    this.board[x][y] = this.ships[this.ships.length - 1];

    for (var i = 1; i < length; i++) {
      this.board[isHorizontal ? x : x + i][isHorizontal ? y + i : y] =
        this.ships[this.ships.length - 1];
    }

    return true;
  }

  receiveAttack(x, y) {
    let hasAlreadyHitPosition = false;
    this.hitAttacks.forEach((e) => {
      if (e[0] == x && e[1] == y) {
        hasAlreadyHitPosition = true;
      }
    });

    this.missedAttacks.forEach((e) => {
      console.log(e);
      if (e[0] == x && e[1] == y) {
        hasAlreadyHitPosition = true;
      }
    });

    if (hasAlreadyHitPosition) return false;

    if (this.board[x][y] !== "Empty") {
      console.log("hit");
      this.hitAttacks.push([x, y]);
      this.board[x][y].hit();
    } else {
      this.missedAttacks.push([x, y]);
    }

    return true;
  }

  allShipsSunk() {
    let allSunk = this.ships.length === 0 ? false : true;

    this.ships.forEach((ship) => {
      if (!ship.sunk) {
        console.log("issue");
        allSunk = false;
      }
    });

    return allSunk;
  }
}

class Player {
  constructor(name, isTurn, gameboard) {
    this.name = name;
    this.isTurn = isTurn;
    this.gameboard = gameboard;
    this.ships = [
      new Ship("Carrier", 5),
      new Ship("Battleship", 4),
      new Ship("Cruiser", 3),
      new Ship("Submarine", 2),
      new Ship("Destroyer", 2),
    ];
    this.activeShips = [];
    this.coordinatesAttacked = [];
  }

  makeRandomMove() {
    let attackWorked = false;

    while (!attackWorked) {
      const test = this.attackCoordinates(
        Math.floor(Math.random(0, gridSize)),
        Math.floor(Math.random(0, gridSize))
      );
      attackWorked = test;
    }

    return true;
  }

  attackCoordinates(x, y) {
    if (!this.isTurn) return false;
    let newCoordinates = true;

    this.coordinatesAttacked.forEach((coordinate) => {
      if (x === coordinate[0] && y === coordinate[1]) {
        newCoordinates = false;
      }
    });

    if (!newCoordinates) return false;

    this.coordinatesAttacked.push([x, y]);
    this.gameboard.receiveAttack(x, y);
    return true;
  }
}

let player1 = null;
let player2 = null;
let player1board = null;
let player2board = null;

startGameButton.addEventListener("click", () => {
  StartGame();
});

const StartGame = () => {
  if(playerNameInput.value == ""){
    alert("Please enter a name");
    return;
  }

  player1 = new Player(playerNameInput.value , true, new Gameboard());
  playerNameStat.textContent = player1.name;
  player2 = new Player("Test2", false, new Gameboard());

  player1board = new Gameboard();
  player2board = new Gameboard();
  
  menuScreen.style.display = "none";
  gameScreen.style.display = "flex";

};

export { Ship, Gameboard, Player };
