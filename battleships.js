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
    this.gridSize = 10;
    this.hitAttacks = [];
    this.missedAttacks = [];
    this.initBoard();
  }

  initBoard() {
    for (var x = 0; x < this.gridSize; x++) {
      this.board[x] = [];
      for (var y = 0; y < this.gridSize; y++) {
        this.board[x][y] = 'Empty';
      }
    }
  }

  placeShip(name, length, x, y, isHorizontal) {
    for (var t = 0; t < length; t++) {
      if (
        this.board[isHorizontal ? x : x + t][isHorizontal ? y + t : y] !==
        'Empty'
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
        console.log('issue')
        allSunk = false;
      }
    });

    return allSunk;
  }
}

class Player {}


export { Ship, Gameboard, Player };
