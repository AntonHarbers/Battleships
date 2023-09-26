import { gridSize } from "./vars";

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
  constructor(isComputer) {
    this.board = new Array();
    this.isComputer = isComputer;
    this.ships = [];
    this.sunkShips = [];
    this.hitAttacks = [];
    this.missedAttacks = [];
    this.notYetAttacked = [];
    this.initBoard();
  }

  initBoard() {
    for (var x = 0; x < gridSize; x++) {
      this.board[x] = [];
      for (var y = 0; y < gridSize; y++) {
        this.board[x][y] = "Empty";
        this.notYetAttacked.push([x, y]);
      }
    }
  }

  placeShip(name, length, x, y, isHorizontal) {
    for (var t = 0; t < length; t++) {
      if (
        this.board[isHorizontal ? x + t : x][isHorizontal ? y : y + t] !==
        "Empty"
      ) {
        return false;
      }
    }

    this.ships.push(new Ship(name, length));

    for (var i = 0; i < length; i++) {
      this.board[isHorizontal ? x + i : x][isHorizontal ? y : y + i] =
        this.ships[this.ships.length - 1];
    }

    return true;
  }

  receiveAttack(x, y) {
    let hasAlreadyHitPosition;

    if (this.notYetAttacked.some((e) => e[0] === x && e[1] === y)) {
      hasAlreadyHitPosition = false;
    } else {
      hasAlreadyHitPosition = true;
    }

    if (hasAlreadyHitPosition) return false;

    if (this.board[x][y] !== "Empty") {
      this.hitAttacks.push([x, y]);
      this.board[x][y].hit();
    } else {
      this.missedAttacks.push([x, y]);
      this.board[x][y] = "Missed";
    }

    this.notYetAttacked = this.notYetAttacked.filter((item) => {
      return item[0] !== x || item[1] !== y;
    });

    return true;
  }

  allShipsSunk() {
    let allSunk = this.ships.length === 0 ? false : true;

    this.ships.forEach((ship) => {
      if (!ship.sunk) {
        allSunk = false;
      }
    });

    return allSunk;
  }
}

class Player {
  constructor(name, isTurn, gameboard, enemyBoard) {
    this.name = name;
    this.isTurn = isTurn;
    this.gameboard = gameboard;
    this.enemyBoard = enemyBoard;
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
    this.enemyBoard.receiveAttack(x, y);
    return true;
  }
}

export { Ship, Gameboard, Player, gridSize };
// module.exports = { Ship, Gameboard, Player, gridSize };
