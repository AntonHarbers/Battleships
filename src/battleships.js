// import { squareEvent } from './script.js';

// const playerGrid = document.querySelector('#player-grid');
// const computerGrid = document.querySelector('#computer-grid');

const gridSize = 10;

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
    this.initBoard();
  }

  initBoard() {
    for (var x = 0; x < gridSize; x++) {
      this.board[x] = [];
      for (var y = 0; y < gridSize; y++) {
        this.board[x][y] = 'Empty';
      }
    }
  }

  placeShip(name, length, x, y, isHorizontal) {
    for (var t = 0; t < length; t++) {
      if (
        this.board[isHorizontal ? x + t : x][isHorizontal ? y : y + t] !==
        'Empty'
      ) {
        return false;
      }
    }

    this.ships.push(new Ship(name, length));

    for (var i = 0; i < length; i++) {
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

    if (this.board[x][y] !== 'Empty') {
      console.log('hit');
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
        console.log('issue');
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
      new Ship('Carrier', 5),
      new Ship('Battleship', 4),
      new Ship('Cruiser', 3),
      new Ship('Submarine', 2),
      new Ship('Destroyer', 2),
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
    this.gameboard.receiveAttack(x, y);
    return true;
  }
}

// export { Ship, Gameboard, Player, gridSize };
module.exports = { Ship, Gameboard, Player, gridSize };
