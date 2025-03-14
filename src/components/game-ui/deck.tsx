import React from "react";
import { Card } from "./card";

export const Deck: React.FC = () => {
  return (
    <div className="flex flex-row gap-4 mt-24">
      <Card />

      <div className="mt-8 flex flex-row gap-4"> 
        <Card />
        <Card />
      </div> 
       
      <Card /> 
    </div>
  );
};