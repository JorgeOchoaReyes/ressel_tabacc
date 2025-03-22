/* eslint-disable @typescript-eslint/prefer-for-of */
import * as React from "react";
import { useRouter } from "next/router";
import { type Ressel_Tabacc_Table, sun_cards, moon_cards, type Sun_Card, type Moon_Card, type UserHandState, type Move, nextPlayer_clockwise, nextPlayer_counter_clockwise, type Player } from "~/utils/classes";

export function useGameManager() {
  const [table, setTable] = React.useState<Ressel_Tabacc_Table | null>(null);
  const router = useRouter();

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
      end_player_id: "1",
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
      const orientation = table.rotation_direction === "clockwise" ? nextPlayer_clockwise : nextPlayer_counter_clockwise;
      const nextPlayerToFind = orientation[player.position]; 
      playerIndex = table.players.findIndex((player) => player.position === nextPlayerToFind);
      
    }

    const reverse_orientation = table.rotation_direction !== "clockwise" ? nextPlayer_clockwise : nextPlayer_counter_clockwise;
    const findLastPlayer = reverse_orientation[table?.players[0]?.position ?? "bottom"];
    const lastPlayer = table.players.find((player) => player.position === findLastPlayer);
    table.end_player_id = lastPlayer?.player_id ?? "1";

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

  const searchForNextPlayer = (
    rotation: "clockwise" | "counter-clockwise", 
    position: "top" | "left" | "bottom" | "right", 
    _table: Ressel_Tabacc_Table, 
  ): (Player | null) => {
    const orientation = rotation === "clockwise" ? nextPlayer_clockwise : nextPlayer_counter_clockwise; 

    let nextPlayerToFind = orientation[position];
    let nextPlayer = _table.players.find((player) => player.position === nextPlayerToFind);
    if(!nextPlayer) {
      let passes = 0;
      while(!nextPlayer && passes < 4) { 
        nextPlayerToFind = orientation[nextPlayerToFind];
        nextPlayer = _table.players.find((player) => player.position === nextPlayerToFind);
        passes++;
      }
    }
    return nextPlayer ?? null;
  };

  const endRound = () => {
    console.log("End round");
  };

  const selectDeckCard = (userId: string, deck_sun: boolean, deck_moon: boolean) => {
    const deck = deck_sun ? table?.deck_sun : table?.deck_moon;
    if(!deck) {
      alert("Deck not found");
      return;
    }
    const copyTable = { ...table };
    const newCard = deck.pop();
    if(!newCard) {
      alert("No more cards in deck");
      return;
    }
    if(deck_sun) {
      copyTable.deck_sun = deck as Sun_Card[];
    } else {
      copyTable.deck_moon = deck as Moon_Card[];
    }
    return newCard;
  };

  const onConfirmNewCardSelection = (userId: string, newCardSun?: Sun_Card, newCardMoon?: Moon_Card) => {
    console.log("Confirm new card selection");
  };
 
  const userStand = (userId: string) => {
    if(!table) {
      alert("Table not found");
      return;
    } 
    const copyTable = { ...table };
    const userHand = table.user_hands_state.find((hand) => hand.player_id === userId);
    if(!userHand) {
      console.log("User hand not found");
      return;
    } 
    const move: Move = {
      player_id: userHand.player_id,
      card_sun: userHand.hand.card_sun,
      card_moon: userHand.hand.card_moon, 
      new_card_sun: null,
      new_card_moon: null,
      action: "stand",
      turn: copyTable.turn,
      round: table.round,
      tokens: userHand.tokens,
      new_tokens: userHand.tokens,
      timestamp: new Date().getTime(),
    }; 
    let turn = copyTable.turn; 
    if(table.end_player_id === userId) {
      turn++; 
    }
    copyTable.turn = turn;
    copyTable.moves.push(move);
    const nextPlayer = searchForNextPlayer(copyTable.rotation_direction, userHand.position, copyTable);
    if(!nextPlayer) {
      console.log("Next player not found");
      return;
    }
    copyTable.current_users_turn_id = nextPlayer.player_id;

    setTable(copyTable);
  };

  const playerLeave = async (userId: string) => {
    if(!table) {
      alert("Table not found");
      return;
    }
    const copyTable = { ...table };
    const playerIndex = copyTable?.players?.findIndex((player) => player.player_id === userId);
    if(playerIndex === -1 || playerIndex === undefined) {
      console.log("Player not found");
      return;
    }

    const playerPosition = copyTable?.players[playerIndex]?.position ?? "bottom";
    const findNextPlayer = searchForNextPlayer(copyTable.rotation_direction, playerPosition, copyTable);
    if(!findNextPlayer) {
      alert("Next player not found");
      return;
    }
    copyTable.current_users_turn_id = findNextPlayer?.player_id;
    
    copyTable.players = copyTable?.players?.filter((player) => player.player_id !== userId);
    copyTable.user_hands_state = copyTable?.user_hands_state?.filter((hand) => hand.player_id !== userId);

    if(copyTable?.players?.length === 0) {
      endGame();
    } 
    setTable(copyTable); 
    // await router.push("/lobby");
  };

  const endGame = () => {
    console.log("Game ended");
  };  

  const userWon = () => {
    console.log("User won");
  };

  const userLost = () => {
    console.log("User lost");
  };  
  return { table, startGame, userStand, playerLeave, selectDeckCard, onConfirmNewCardSelection };
};
  