
export type Hand = {
    card_sun: string;
    card_moon: string;
}

export type UserHand = {
    player_id: string;
    hand: Hand;
    tokens: number;
}

export type Pot = {
    amount: number;
    player_id: string;
}

export type Move = {
    player_id: string;
    card_sun: string;
    card_moon: string;
    new_card_sun: string | null;
    new_card_moon: string | null;
    action: "select_new_card" | "select_open_card" | "stand";
    turn: number;
    round: number;
    tokens: number;
    new_tokens: number;
    timestamp: number;
}

export type GameState = "new" | "playing" | "ended";

export type RotationDirection = "clockwise" | "counter-clockwise";

export type Ressel_Tabacc_Table = {
  table_name: string; 
  table_id: number;

  turn: number;
  max_turns: number;
  round: number;

  deck_sun: string[];
  deck_moon: string[];
  open_cards_sun: string[];
  open_cards_moon: string[];

  start_player_id: string;
  players: string[];
  rotation_direction: RotationDirection;
  pot: Pot[];
  user_hands: UserHand[];
  moves: Move[];
  game_state: GameState;
 
};
 
