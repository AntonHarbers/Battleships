import { Ship, Gameboard, Player, gridSize } from './battleships.js';
import './styles/styles.css';

const playerTurnDiv = document.getElementById('player-turn');
const computerTurnDiv = document.getElementById('computer-turn');
const startGameButton = document.querySelector('#start-game-btn');
const menuScreen = document.querySelector('#menu-screen');
const gameScreen = document.querySelector('#game-screen');
const playerNameInput = document.querySelector('#player-name-input');
const playerNameStat = document.querySelector('#player-name-stat');

const player1board = new Gameboard(false);
const player2board = new Gameboard(true);

const player1 = new Player(playerNameInput.value, true, player1board);
const player2 = new Player('Computer', false, player2board);

startGameButton.addEventListener('click', () => {
  StartGame();
});

const StartGame = () => {
  if (playerNameInput.value == '') {
    alert('Please enter a name');
    return;
  }

  player1.name = playerNameInput.value;
  playerNameStat.textContent = player1.name;

  menuScreen.style.display = 'none';
  gameScreen.style.display = 'flex';
};
