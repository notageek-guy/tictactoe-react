import React from "react";
import styles from "./Score.module.css";
import { ScoreBoard, ScoreResult } from "./Score.style";

export default function Score({ score, xPlaying }) {
  console.log(score);

  const { X: scoreX, O: scoreY } = score;

  return (
    <ScoreBoard>
      <ScoreResult className={`${styles.scoreX} ${!xPlaying && styles.inactive}`}>X - {scoreX}</ScoreResult>
      <ScoreResult className={`${styles.scoreY } ${xPlaying && styles.inactive}` }>0 - {scoreY}</ScoreResult>
    </ScoreBoard>
  );
}
