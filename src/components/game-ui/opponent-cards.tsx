import React from "react";
import { Card } from "./card";
import { type Moon_Card, type Sun_Card } from "~/utils/classes";

export const OpponentCards: React.FC<{
  side: "left" | "right" | "top" | "bottom",
  hand?: {
    card_sun: Sun_Card;
    card_moon: Moon_Card;
  },
  isCurrentPlayerTurn: boolean;
  playerLeft?: boolean;
}> = ({
  side,
  hand,
  isCurrentPlayerTurn,
  playerLeft
}) => {
  const rotate = {
    left: "rotate-[90deg]",
    right: "rotate-[-90deg]",
    top: "rotate-[180deg]",
    bottom: ""
  };
  const border = (isCurrentPlayerTurn && !playerLeft) ? "border-[#9dfaee]" : "border-[#000000]";

  const cardSun = playerLeft ? "sun_back" : hand?.card_sun ?? "sun_back";
  const cardMoon = playerLeft ? "moon_back" : hand?.card_moon ?? "moon_back";

  return (               
    <div className={`flex flex-row gap-4 border-2 ${border} p-8 bg-[#808b5e] relative ${rotate[side]} rounded-lg`}>  
      <div className="absolute left-14 rotate-[10deg]"> 
        <Card 
          // faceDown
          // locked
          card={cardSun} 
        />  
      </div> 
      <div className="rotate-[-10deg]"> 
        <Card 
          // faceDown
          // locked
          card={cardMoon} 
        />
      </div> 
    </div> 
  );
};