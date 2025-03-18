import { ArrowUp, DoorOpen, SkipForward } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";

export const PlayerOptions: React.FC<{
  playerTurn: string;
  isCurrentPlayersTurn: boolean;
}> = ({
  playerTurn,
  isCurrentPlayersTurn
}) => {
  return (
    <div className="flex flex-col justify-center gap-4 border-2 border-[#9dfaee] p-4 bg-[#302d25] rounded-lg">
      <p className="text-[#9dfaee] text-center">
        {
          isCurrentPlayersTurn ? "Your turn" : "Opponent's turn"
        } 
      </p>
      <Button 
        variant={"ghost"}
        className="bg-[#8e8377] text-[#f5f5f5]"
      >
        <ArrowUp /> Select a card
      </Button>
      <Button 
        variant={"ghost"}
        className="bg-[#8e8377] text-[#f5f5f5]"
      >   
        <SkipForward />
        Stand
      </Button>
      <Button 
        variant={"destructive"} 
      >  
        <DoorOpen /> Leave
      </Button>
    </div>
  );
};
