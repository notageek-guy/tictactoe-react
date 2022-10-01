import "./App.css";
import Board from "./components/board/Board";

import { useState } from "react";
import { checkWinner } from "./helper/check";
import Score from "./components/score/Score";
import Reset from "./components/reset/Reset";
export default function App() {
  const nullValue = Array(9).fill(null);
  const [board, setBoard] = useState(nullValue);
  const [isX, setIsX] = useState(true);
  const [gameEnded, setGameEnded] = useState(false);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const handleClick = (boxId) => {
    const updatedBoard = board.map((value, id) => {
      if (boxId === id) return isX ? "X" : "O";
      return value;
    });
    
   const winner =  checkWinner(updatedBoard,()=> {
    setGameEnded(true)
   });
    if(winner){
      if(winner==="O"){
        setScores({...scores,O:scores.O+1})
      }else {
        setScores({...scores,X:scores.X+1})
      }

    }
    setBoard(updatedBoard);
    setIsX(!isX);
  };
const resetGame = () => {
      setGameEnded(false);
      setBoard(nullValue);
    }
  return (
    <div>
      <Score score={scores} xPlaying = {isX}/>
      <Board board={board} onClick={gameEnded ? resetGame : handleClick} />
      <Reset reset={resetGame}/>
    </div>
  );
}
