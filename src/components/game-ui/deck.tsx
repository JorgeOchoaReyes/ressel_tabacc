import React from "react";
import { Card } from "./card";
import { type Moon_Card, type Sun_Card } from "~/utils/classes"; 

export const Deck: React.FC<{
  openMoonCard: Moon_Card;
  openSunCard: Sun_Card;
}> = ({ 
  openMoonCard,
  openSunCard
}
) => {
  return (
    <div className="flex flex-row gap-4 mt-2"> 
      <Card card={openMoonCard} deck_card /> 

      <div className="mt-16 flex flex-row gap-"> 
        <Card card="moon_back" deck_card />
        <Card card="sun_back" deck_card />
      </div> 
       
      <Card card={openSunCard} deck_card /> 
    </div>
  );
};