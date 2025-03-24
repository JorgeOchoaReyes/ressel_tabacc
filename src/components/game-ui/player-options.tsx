import { ArrowUp, Check, DoorOpen, SkipForward } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { type Sun_Card, type Moon_Card } from "~/utils/classes";

export const PlayerOptions: React.FC<{
  playerTurn: string;
  isCurrentPlayersTurn: boolean;
  userActive: boolean;
  userStand: () => void;
  playerLeave: () => Promise<void>;
  selectingACard: boolean;
  onConfirmNewCardSelection: () => void;
  cardSelecting?: Sun_Card | Moon_Card;
}> = ({
  playerTurn,
  isCurrentPlayersTurn,
  userActive,
  userStand,
  playerLeave,
  selectingACard,
  cardSelecting,
  onConfirmNewCardSelection
}) => {
  return (
    <div className={`flex flex-col justify-center gap-4 border-2 ${userActive ? "border-[#9dfaee]" : "border-black"} p-4 bg-[#302d25] rounded-lg`}>
      <p className="text-[#9dfaee] text-center">
        {
          isCurrentPlayersTurn ? "Your turn" : "Opponent's turn"
        } 
      </p>
      <Button 
        variant={"ghost"}
        className="bg-[#8e8377] text-[#f5f5f5]"
        onClick={  () => {
          onConfirmNewCardSelection(); 
        }}
      >
        {
          !selectingACard ? <>
            <ArrowUp /> Select a card
          </> : <>
            <Check /> Confirm selection of {cardSelecting}
          </>
        }
      </Button>
      <Button 
        variant={"ghost"}
        onClick={userStand}
        className="bg-[#8e8377] text-[#f5f5f5]"
      >   
        <SkipForward />
        Stand
      </Button>
      <Button 
        onClick={async () => {
          await playerLeave();
        }}
        variant={"destructive"} 
      >  
        <DoorOpen /> Leave
      </Button>
    </div>
  );
};
