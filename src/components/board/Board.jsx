import React from "react";
import Box from "../box/Box";
import { Grid } from "./board.style";

export default function Board({ board, onClick }) {
  console.log(board ?? "not found");
  return (
    <Grid>
      {board?.map((item, index) => (
        <Box
          key={index}
          value={item}
          onClick={() => item === null && onClick(index)}
        />
      ))}
    </Grid>
  );
}
