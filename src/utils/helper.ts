import { sun_cards, moon_cards } from "./classes";

export const shuffle = (): {
    deck_sun: string[];
    deck_moon: string[];
} => {
  const shuffled_sun = sun_cards.sort(() => Math.random() - 0.5);
  const shuffled_moon = moon_cards.sort(() => Math.random() - 0.5);
  return { deck_sun: shuffled_sun, deck_moon: shuffled_moon };
}; 