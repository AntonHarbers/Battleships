import { playerBoard, computerBoard, player1board, player2board } from "./vars";

// render boards

export const renderBoards = () => {
  playerBoard.innerHTML = "";
  computerBoard.innerHTML = "";

  renderBoard(player1board.board, false);
  renderBoard(player2board.board, true);
};

const renderBoard = (board, isComputer) => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.classList.add(isComputer ? "computerSquare" : "playerSquare");
      square.dataset.x = x;
      square.dataset.y = y;

      const container = isComputer ? computerBoard : playerBoard;
      container.appendChild(square);
    }
  }
};
