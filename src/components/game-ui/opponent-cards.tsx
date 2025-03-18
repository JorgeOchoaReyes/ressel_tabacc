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
}> = ({
  side,
  hand,
  isCurrentPlayerTurn
}) => {
  const rotate = {
    left: "rotate-[90deg]",
    right: "rotate-[-90deg]",
    top: "rotate-[180deg]",
    bottom: ""
  };
  const border = isCurrentPlayerTurn ? "border-[#9dfaee]" : "border-[#000000]";
  return (               
    <div className={`flex flex-row gap-4 border-2 ${border} p-8 bg-[#808b5e] relative ${rotate[side]} rounded-lg`}>  
      <div className="absolute left-14 rotate-[10deg]"> 
        <Card 
          // faceDown
          // locked
          card={hand?.card_sun ?? "sun_back"} 
        />  
      </div> 
      <div className="rotate-[-10deg]"> 
        <Card 
          // faceDown
          // locked
          card={hand?.card_moon ?? "moon_back"} 
        />
      </div> 
    </div> 
  );
};