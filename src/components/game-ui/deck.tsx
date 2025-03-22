import React from "react";
import { Card } from "./card";
import { type Moon_Card, type Sun_Card } from "~/utils/classes"; 

export const Deck: React.FC<{
  openMoonCard: Moon_Card;
  openSunCard: Sun_Card;
  refOpenMoonCardComponent: React.MutableRefObject<HTMLDivElement | null>;
  refOpenSunCardComponent: React.MutableRefObject<HTMLDivElement | null>;
  refDeckSunCardComponent: React.MutableRefObject<HTMLDivElement | null>;
  refDeckMoonCardComponent: React.MutableRefObject<HTMLDivElement | null>;
  selectDeckCard:(userId: string, deck_sun: boolean, deck_moon: boolean) => Moon_Card | Sun_Card | undefined;
}> = ({ 
  openMoonCard,
  openSunCard,
  selectDeckCard, 
  refOpenMoonCardComponent,
  refOpenSunCardComponent,
  refDeckSunCardComponent,
  refDeckMoonCardComponent,
}
) => {
  return (
    <div className="flex flex-row gap-4 bg-slate-500 rounded-lg p-1"> 
      <Card card={openMoonCard} deck_card _ref={refOpenMoonCardComponent} /> 

      <div className="mt-16 flex flex-row gap-"> 
        <Card card="moon_back" deck_card _ref={refDeckSunCardComponent} />
        <Card card="sun_back" deck_card _ref={refDeckMoonCardComponent} />
      </div> 
       
      <Card card={openSunCard} deck_card _ref={refOpenSunCardComponent} /> 
    </div>
  );
};