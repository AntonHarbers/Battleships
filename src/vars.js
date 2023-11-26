import { Gameboard, Player } from './battleships.js';

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
const playerShipRotationBtn = document.querySelector(
  '#player-ship-rotation-btn'
);
const gameOverSection = document.querySelector('#game-over-screen');
const restartGaemButton = document.querySelector('#restart-game-btn');
const gridSize = 10;

// variables
const player1board = new Gameboard(false);
const player2board = new Gameboard(true);
const player1 = new Player(
  playerNameInput.value,
  true,
  player1board,
  player2board
);
const player2 = new Player('Computer', false, player2board, player1board);

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
  player1board,
  player2board,
  player1,
  player2,
  gameOverSection,
  restartGaemButton,
};
