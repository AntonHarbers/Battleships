const placeShipsRandomly = (player, gridSize) => {
  for (const ship of player.ships) {
    const [x, y, isHorizontal] = findPossibleShipCoordinates(
      player.gameboard,
      ship,
      gridSize
    );

    player.gameboard.placeShip(ship.name, ship.length, x, y, isHorizontal);

    player.activeShips.push(ship);
  }

  player.ships = [];
};

const findPossibleShipCoordinates = (board, ship, gridSize) => {
  let freePositionFound = false;
  let x = 0;
  let y = 0;
  let isHorizontal = false;

  while (!freePositionFound) {
    isHorizontal = Math.round(Math.random() * 10) > 5;
    freePositionFound = true;
    x = Math.floor(
      Math.random() * (isHorizontal ? gridSize - ship.length : gridSize)
    );
    y = Math.floor(
      Math.random() * (isHorizontal ? gridSize : gridSize - ship.length)
    );

    if (isHorizontal) {
      for (const i of Array(ship.length).keys()) {
        if (board.board[x + i][y] !== 'Empty') {
          freePositionFound = false;
        }
      }
    } else {
      for (const i of Array(ship.length).keys()) {
        if (board.board[x][y + i] !== 'Empty') {
          freePositionFound = false;
        }
      }
    }
  }

  return [x, y, isHorizontal];
};

const IsPositionFree = (x, y, length, shipRotationHorizontal, player1board) => {
  const checkX = x;
  const checkY = y;

  if (shipRotationHorizontal) {
    for (const i of Array(length).keys()) {
      if (player1board.board[checkX + i][checkY] !== 'Empty') {
        return false;
      }
    }
  } else {
    for (const i of Array(length).keys()) {
      if (player1board.board[checkX][checkY + i] !== 'Empty') {
        return false;
      }
    }
  }

  return true;
};

export { IsPositionFree, placeShipsRandomly };
