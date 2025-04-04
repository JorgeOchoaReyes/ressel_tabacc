export type LTRB = "left" | "top" | "right" | "bottom";

export const nextPlayer_clockwise = {
  "bottom": "right",
  "right": "top",
  "top": "left",
  "left": "bottom",
} as Record<LTRB, LTRB>;
export const nextPlayer_counter_clockwise = {
  "bottom": "left",
  "left": "top",
  "top": "right",
  "right": "bottom",
} as Record<LTRB, LTRB>;

export type Hand = {
    card_sun: Sun_Card;
    card_moon: Moon_Card;
}

export type UserHandState = {
    player_id: string;
    player_name: string;
    hand: Hand;
    tokens: number;
    position: "left" | "right" | "top" | "bottom";
}

export type Pot = {
    amount: number;
    player_id: string;
}

export type Player = {
  player_id: string;
  player_name: string; 
  position: "left" | "right" | "top" | "bottom";
}

export type Move = {
    player_id: string;
    prev_card_sun: string;
    prev_card_moon: string;
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

export type RoundResults = {
  round: number;
  player_id: string;
  player_name: string;
  winner: boolean;
  sun_card: Sun_Card;
  moon_card: Moon_Card;
  loss_tokens: number;
  gain_tokens: number; 
  prev_tokens: number;
  new_tokens: number;
}

export type Ressel_Tabacc_Table = {
  table_name: string; 
  table_id: number;
  table_creator_id: string;
  table_creator_name: string;
  table_password: string;
  table_password_protected: boolean;

  turn: number;
  max_turns: number;
  round: number;
  moves: Move[];
  rotation_direction: RotationDirection;
  pot: Pot[];
  user_hands_state: UserHandState[];
  game_state: GameState;
 

  deck_sun: Sun_Card[];
  deck_moon: Moon_Card[];
  open_cards_sun: Sun_Card[];
  open_cards_moon: Moon_Card[];

  start_player_id: string;
  end_player_id: string;

  players: Player[];
  current_users_turn_id: string;

  round_winners: RoundResults[];
};
 
export const sun_cards = [
  "sun_1", "sun_2", "sun_3", "sun_4", "sun_5", "sun_6", 
  "sun_1", "sun_2", "sun_3", "sun_4", "sun_5", "sun_6", 
  "sun_1", "sun_2", "sun_3", "sun_4", "sun_5", "sun_6", 
  "sun_imposter", "sun_imposter", "sun_imposter",
  "sun_sylop"
] as Sun_Card[]; 
export type Sun_Card = "sun_1" | "sun_2" | "sun_3" | "sun_4" | "sun_5" | "sun_6" | "sun_imposter" | "sun_sylop" | "sun_back";
 
export const moon_cards = [
  "moon_1", "moon_2", "moon_3", "moon_4", "moon_5", "moon_6", 
  "moon_1", "moon_2", "moon_3", "moon_4", "moon_5", "moon_6", 
  "moon_1", "moon_2", "moon_3", "moon_4", "moon_5", "moon_6", 
  "moon_imposter", "moon_imposter", "moon_imposter",
  "moon_sylop"
] as Moon_Card[];
export type Moon_Card = "moon_1" | "moon_2" | "moon_3" | "moon_4" | "moon_5" | "moon_6" | "moon_imposter" | "moon_sylop" | "moon_back"; 

export type DivOrNull = HTMLDivElement | null;