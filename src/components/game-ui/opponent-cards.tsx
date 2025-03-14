import React from "react";
import { Card } from "./card";

export const OpponentCards: React.FC = () => {
  return (
    <div className="flex flex-row gap-4 relative">  
      <div className="absolute left-14 rotate-[10deg]"> 
        <Card />
      </div> 
      <div className="rotate-[-10deg]"> 
        <Card />
      </div> 
    </div> 
  );
};