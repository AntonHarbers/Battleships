import { Ship, Gameboard, Player } from '../battleships';

describe('Ship class', () => {
  test('#constructor', () => {
    const ship = new Ship('Carrier', 5);
    expect(ship.name).toBe('Carrier');
    expect(ship.length).toBe(5);
    expect(ship.hits).toBe(0);
    expect(ship.sunk).toBe(false);
  });

  test('#hit', () => {
    const ship = new Ship('Carrier', 5);
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test('#isSunk', () => {
    const ship = new Ship('Carrier', 5);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.isSunk();
    expect(ship.sunk).toBe(true);
  });
});

describe('Gameboard class', () => {
  test('#initBoard', () => {
    const board = new Gameboard();
    expect(board.board[0][1]).toBe('Empty');
    expect(board.board[1][4]).toBe('Empty');
    expect(board.board[2][7]).toBe('Empty');
    expect(board.board[4][8]).toBe('Empty');
    expect(board.board.length).toBe(10);
    expect(board.board[0].length).toBe(10);

    const accessOutOfBounds = () => board.board[11][1];
    expect(accessOutOfBounds).toThrowError();
  });

  describe('#placeShip', () => {
    test('A ship is instantiated horizontally when calling place ship', () => {
      const board = new Gameboard();
      const name = 'Carrier';
      const length = 3;
      const x = 5;
      const y = 2;
      const isHorizontal = true;
      board.placeShip(name, length, x, y, isHorizontal);
      const ships = board.ships;

      expect(board.board[x][y]).toEqual(ships[0]);
      expect(board.board[x][y + 2]).toEqual(ships[0]);
      expect(board.board[x + 1][y]).toBe('Empty');
    });

    test('A ship is instantiated vertically when calling place ship', () => {
      const board = new Gameboard();
      const name = 'Carrier';
      const length = 3;
      const x = 5;
      const y = 2;
      const isHorizontal = false;
      board.placeShip(name, length, x, y, isHorizontal);
      const ships = board.ships;

      expect(board.board[x][y]).toEqual(ships[0]);
      expect(board.board[x + 2][y]).toEqual(ships[0]);
      expect(board.board[x][y + 1]).toBe('Empty');
    });

    test('Returns false if trying to place a ship that would intersect with an already placed ship', () => {
      const board = new Gameboard();

      board.placeShip('Sub', 3, 5, 5, true);

      const test1 = board.placeShip('Sub', 3, 5, 5, false);
      const test2 = board.placeShip('Sub', 3, 5, 7, true);
      const test3 = board.placeShip('Sub', 3, 1, 1, true);

      expect(test1).toBe(false);
      expect(test2).toBe(false);
      expect(test3).toBe(true);
    });
  });

  describe('#receiveAttack', () => {
    test('Given the coordinates of a ship, call the hit function on that ship', () => {
      const board = new Gameboard();
      board.placeShip('Sub', 3, 5, 5, true);

      board.receiveAttack(5, 5);
      expect(board.ships[0].hits).toBe(1);
      board.receiveAttack(5, 6);
      expect(board.ships[0].hits).toBe(2);
      board.receiveAttack(5, 5);
      expect(board.ships[0].hits).toBe(2);
      expect(board.hitAttacks).toEqual([
        [5, 5],
        [5, 6],
      ]);
      expect(board.missedAttacks).toEqual([]);
    });

    test('Given the coordinates of no ship, record the missed shot coordinates', () => {
      const board = new Gameboard();

      board.receiveAttack(5, 5);
      expect(board.missedAttacks).toEqual([[5, 5]]);
    });
  });

  describe('#missedAttacks', () => {
    test('The gameboard keeps track of missed attacks correctly', () => {
      const board = new Gameboard();
      board.receiveAttack(1, 1);
      board.receiveAttack(1, 2);
      board.receiveAttack(1, 1);
      board.receiveAttack(2, 3);

      expect(board.missedAttacks).toEqual([
        [1, 1],
        [1, 2],
        [2, 3],
      ]);
    });
  });

  describe('#allShipsSunk', () => {
    test('Returns true if all ships have been sunk', () => {
      const board = new Gameboard();
      board.placeShip('Sub', 3, 5, 5, true);
      board.receiveAttack(5, 5);
      board.receiveAttack(5, 6);
      board.receiveAttack(5, 7);

      expect(board.allShipsSunk()).toBe(true);
    });
    test('Returns false if all ships have not been sunk', () => {
      const board = new Gameboard();
      board.placeShip('Sub', 3, 5, 5, true);
      expect(board.allShipsSunk()).toBe(false);
    });
  });
});

describe('Player Class', () => {
  test('#constructor', () => {
    const player1 = new Player('Test', true);
    expect(player1.name).toBe('Test');
    expect(player1.isTurn).toBe(true);
    expect(player1.coordinatesAttacked).toEqual([]);
    expect(player1.activeShips).toEqual([]);
    expect(player1.ships[0].name).toBe('Carrier');
  });

  describe('#makeRandomMove', () => {
    test('Cannot make the same move multiple times', () => {
      const board = new Gameboard();
      const player = new Player('Test', true, board);
      const notTurnPlayer = new Player('Test1', false, board);
      const attack1 = player.attackCoordinates(1, 1);
      const attack2 = player.attackCoordinates(1, 1);
      const notTurnAttack = notTurnPlayer.attackCoordinates(1, 1);

      expect(attack1).toBe(true);
      expect(attack2).toBe(false);
      expect(notTurnAttack).toBe(false);
    });

    test('When making a move that hits a ship make sure ship takes a hit', () => {
      const board = new Gameboard();
      const player = new Player('Tester', true, board);
      board.placeShip('Destroyer', 2, 5, 5, true);
      expect(board.ships[0].hits).toBe(0);
      player.attackCoordinates(5, 5);
      expect(board.ships[0].hits).toBe(1);
    });

    test('When making a move that does not hit a ship make sure its added to the missed hits array', () => {
      const board = new Gameboard();
      const player = new Player('Tester', true, board);
      expect(board.missedAttacks).toEqual([]);
      player.attackCoordinates(1, 2);
      expect(board.missedAttacks).toEqual([[1, 2]]);
    });
  });
});
