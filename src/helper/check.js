import { WIN_CONDITIONS } from "./data";
export const checkWinner = (board,fn) => {
  for (let i = 0; i < WIN_CONDITIONS.length; i++) {
    const [a, b, c] = WIN_CONDITIONS[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        fn();
      return board[a];
    }
  }
};
