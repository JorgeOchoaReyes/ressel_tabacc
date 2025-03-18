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
    <div className="flex flex-row gap-4 mt-4">
      <Card card={openMoonCard} />

      <div className="mt-8 flex flex-row gap-4"> 
        <Card card="moon_back" />
        <Card card="sun_back" />
      </div> 
       
      <Card card={openSunCard} /> 
    </div>
  );
};