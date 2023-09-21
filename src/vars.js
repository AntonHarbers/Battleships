const playerTurnDiv = document.getElementById('player-turn');
const computerTurnDiv = document.getElementById('computer-turn');
const startGameButton = document.querySelector('#start-game-btn');
const menuScreen = document.querySelector('#menu-screen');
const gameScreen = document.querySelector('#game-screen');
const playerNameInput = document.querySelector('#player-name-input');
const playerNameStat = document.querySelector('#player-name-stat');
const playerBoard = document.querySelector('#player-board');
const computerBoard = document.querySelector('#computer-board');
const playerShipSelect = document.querySelector('#player-ships-select');
const playerShipRotationBtn = document.querySelector("#player-ship-rotation-btn");

const gridSize = 10;

export {
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
};
