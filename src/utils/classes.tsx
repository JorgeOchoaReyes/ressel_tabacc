
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
 
export const sun_cards = [
  "sun_1", "sun_2", "sun_3", "sun_4", "sun_5", "sun_6", 
  "sun_1", "sun_2", "sun_3", "sun_4", "sun_5", "sun_6", 
  "sun_1", "sun_2", "sun_3", "sun_4", "sun_5", "sun_6", 
  "sun_S", "sun_S", "sun_S",
  "sun_Y"
]; 
export type Sun_Card = "sun_1" | "sun_2" | "sun_3" | "sun_4" | "sun_5" | "sun_6" | "sun_S" | "sun_Y";

export const moon_cards = [
  "moon_1", "moon_2", "moon_3", "moon_4", "moon_5", "moon_6", 
  "moon_1", "moon_2", "moon_3", "moon_4", "moon_5", "moon_6", 
  "moon_1", "moon_2", "moon_3", "moon_4", "moon_5", "moon_6", 
  "moon_S", "moon_S", "moon_S",
  "moon_Y"
];
export type Moon_Card = "moon_1" | "moon_2" | "moon_3" | "moon_4" | "moon_5" | "moon_6" | "moon_S" | "moon_Y";