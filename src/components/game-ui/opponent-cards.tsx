import React from "react";
import { Card } from "./card";

export const OpponentCards: React.FC<{
  side: "left" | "right" | "top" | "bottom"
}> = ({
  side
}) => {
  const rotate = {
    left: "rotate-[90deg]",
    right: "rotate-[-90deg]",
    top: "rotate-[180deg]",
    bottom: ""
  };
  return (
    <div className={`flex flex-row gap-4 relative ${rotate[side]}`}>  
      <div className="absolute left-14 rotate-[10deg]"> 
        <Card faceDown locked card="sun_back" />
      </div> 
      <div className="rotate-[-10deg]"> 
        <Card faceDown locked card="moon_back" />
      </div> 
    </div> 
  );
};