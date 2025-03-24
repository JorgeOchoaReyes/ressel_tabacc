import React from "react";
import { Card } from "./card";
import { type Moon_Card, type Sun_Card, type Hand } from "~/utils/classes";

export const UserCards: React.FC<{
  userHand: Hand;
  refUserSunCardComponent: React.MutableRefObject<HTMLDivElement | null>; 
  refUserMoonCardComponent: React.MutableRefObject<HTMLDivElement | null>;  
  onClickOnSelectingCard?: (card: (Sun_Card | Moon_Card)) => void;
}> = (
  { userHand, onClickOnSelectingCard }
) => {
  return (
    <div className="flex flex-row gap-4 relative">  
      <div className="absolute left-14 rotate-[10deg]"> 
        <Card card={userHand.card_sun} onClickOnSelectingCard={onClickOnSelectingCard} />
      </div> 
      <div className="rotate-[-10deg]"> 
        <Card card={userHand.card_moon} onClickOnSelectingCard={onClickOnSelectingCard} />
      </div> 
    </div> 
  );
};