import React from "react";
import { Card } from "./card";
import { type Hand } from "~/utils/classes";

export const UserCards: React.FC<{
  userHand: Hand;
}> = (
  { userHand }
) => {
  return (
    <div className="flex flex-row gap-4 relative">  
      <div className="absolute left-14 rotate-[10deg]"> 
        <Card card={userHand.card_sun} />
      </div> 
      <div className="rotate-[-10deg]"> 
        <Card card={userHand.card_moon} />
      </div> 
    </div> 
  );
};