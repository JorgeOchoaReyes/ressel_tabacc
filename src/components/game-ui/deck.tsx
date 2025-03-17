import React from "react";
import { Card } from "./card";

export const Deck: React.FC = () => {
  return (
    <div className="flex flex-row gap-4 mt-24">
      <Card card="moon_1" />

      <div className="mt-8 flex flex-row gap-4"> 
        <Card card="moon_back" />
        <Card card="sun_back" />
      </div> 
       
      <Card card="sun_1" /> 
    </div>
  );
};