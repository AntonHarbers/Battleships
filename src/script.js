import './styles/styles.css';
import { Gameboard, Player } from './battleships.js';
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
  gridSize,
} from './vars.js';

const player1board = new Gameboard(false);
const player2board = new Gameboard(true);

const player1 = new Player(playerNameInput.value, true, player1board);
const player2 = new Player('Computer', false, player2board);

playerNameInput.value = 'Tony';

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

  renderBoards();
};

// render boards

const renderBoards = () => {
  // clear board renders

  playerBoard.innerHTML = '';
  computerBoard.innerHTML = '';

  renderBoard(player1board.board, false);
  renderBoard(player2board.board, true);
};

const renderBoard = (board, isComputer) => {
  for (var x = 0; x < board.length; x++) {
    for (var y = 0; y < board[x].length; y++) {
      var square = document.createElement('div');
      square.classList.add('square');
      square.classList.add(isComputer ? 'computerSquare' : 'playerSquare');
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
