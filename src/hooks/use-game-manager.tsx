/* eslint-disable @typescript-eslint/prefer-for-of */
import * as React from "react";
import { type Ressel_Tabacc_Table, sun_cards, moon_cards, type Sun_Card, type Moon_Card, type UserHandState } from "~/utils/classes";

export function useGameManager() {
  const [table, setTable] = React.useState<Ressel_Tabacc_Table | null>(null);

  const startGame = () => {
    const table: Ressel_Tabacc_Table = {
      table_name: "",
      table_id: 123,
      table_creator_id: "1",
      table_creator_name: "Player 1",
      table_password: "",
      table_password_protected: false, 

      turn: 1,
      max_turns: 3,
      round: 1,
      moves: [],
      pot: [],
      rotation_direction: "clockwise",
      game_state: "playing",  

      deck_sun: [],
      deck_moon: [],

      open_cards_sun: [],
      open_cards_moon: [], 

      user_hands_state: [],

      start_player_id: "1",
      players: [
        { player_id: "1", player_name: "Player 1", position: "bottom" },
        { player_id: "2", player_name: "Player 2", position: "left" },
        { player_id: "3", player_name: "Player 3", position: "top" },
        { player_id: "4", player_name: "Player 4", position: "right" },
      ],
      current_users_turn_id: "1",
    };

    const sunCard = shuffleDeck([...sun_cards]) as Sun_Card[];
    const moonCard = shuffleDeck([...moon_cards]) as Moon_Card[];

    const playerHands = [] as UserHandState[];

    let playerIndex = table.players.findIndex((player) => player.player_id === table.start_player_id);
    
    for(let i = 0; i < table.players.length; i++) {
      const player = table.players[playerIndex]; 
      if(!player) {
        console.log("Player not found", playerIndex); 
        continue;
      }
      const starting_sunCard = sunCard.pop();
      const starting_moonCard = moonCard.pop(); 
      if(!starting_sunCard || !starting_moonCard) {
        throw new Error("Not enough cards");
      } 
      const userHand: UserHandState = {
        player_id: player.player_id,
        player_name: player.player_name,
        tokens: 7,
        hand: {
          card_sun: starting_sunCard,
          card_moon: starting_moonCard,
        },
        position: player.position,
      }; 
      playerHands.push(userHand);
      if(table.rotation_direction === "clockwise") {
        const nextPlayer = {
          "bottom": "left",
          "left": "top",
          "top": "right",
          "right": "bottom",
        };
        const nextPlayerToFind = nextPlayer[player.position]; 
        playerIndex = table.players.findIndex((player) => player.position === nextPlayerToFind);
      } else {
        const nextPlayer = {
          "bottom": "right",
          "right": "top",
          "top": "left",
          "left": "bottom",
        };
        const nextPlayerToFind = nextPlayer[player.position]; 
        playerIndex = table.players.findIndex((player) => player.position === nextPlayerToFind);
      }
    }

    table.user_hands_state = playerHands;

    const openCardSun = sunCard.pop();
    const openCardMoon = moonCard.pop();
    if(!openCardSun || !openCardMoon) {
      throw new Error("Not enough cards");
    }

    table.open_cards_moon = [openCardMoon];
    table.open_cards_sun = [openCardSun];

    table.deck_sun = sunCard;
    table.deck_moon = moonCard;

    setTable(table);

    console.log(table);

  };

  const shuffleDeck = (deck: (Sun_Card | Moon_Card)[]): (Sun_Card | Moon_Card)[] => {
    const shuffledDeck = deck.sort(() => Math.random() - 0.5);
    return shuffledDeck;
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

  return { table, startGame };
};
