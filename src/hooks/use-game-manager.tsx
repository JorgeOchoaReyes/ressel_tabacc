import * as React from "react";
import { type Ressel_Tabacc_Table, sun_cards, moon_cards } from "~/utils/classes";


export function useGameManager() {
  const [table, setTable] = React.useState<Ressel_Tabacc_Table | null>(null);

  const startGame = () => {
    console.log("Game started");
  };

  const endGame = () => {
    console.log("Game ended");
  };

  const nextTurn = () => {
    console.log("Next turn");
  };

  const userMove = () => {
    console.log("User move");
  };
 
  const userWon = () => {
    console.log("User won");
  };

  const userLost = () => {
    console.log("User lost");
  }; 

  return { table,  };
};
