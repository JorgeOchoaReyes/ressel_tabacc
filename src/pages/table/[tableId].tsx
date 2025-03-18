import { DashboardLayout } from "~/components/layout/DashboardLayout";  
import { FadeInSlide } from "~/components/animation/FadeInSlide";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Token } from "~/components/game-ui/token"; 
import { UserCards } from "~/components/game-ui/user-cards";
import { Deck } from "~/components/game-ui/deck";
import { OpponentCards } from "~/components/game-ui/opponent-cards";
import { useGameManager } from "~/hooks/use-game-manager";
import { PlayerOptions } from "~/components/game-ui/player-options";

export default function Home(){   
  const router = useRouter();
  const id = router.query.tableId;

  const {
    startGame,
    table
  } = useGameManager(); 

  return (
    <DashboardLayout title="Table"> 
      <div className="overflow-hidden bg-[#a17c3d]" style={{
        backgroundImage: "url(/deck/table.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", 
        backgroundColor: "rgba(255,255,255,0.3)",
        backgroundBlendMode: "lighten"
      }}>

        <FadeInSlide>
          <Button className="fixed top-5 left-5" variant={"ghost"} onClick={async () => {
            await router.push("/lobby");
          }}>
            <ArrowLeft size={64} />
          </Button> 
          {
            table ? <div className="flex w-[100vw] h-[100vh] items-center justify-center content-center overflow">  
              <div className="flex flex-col gap-4 p-4 w-[100vw] h-[100vh] items-center justify-start rounded-lg overflow-hidden">
                
                <OpponentCards 
                  side="top" 
                  isCurrentPlayerTurn={table.current_users_turn_id === "3"}
                  hand={table.user_hands_state.find((p) => p.position === "top")?.hand} /> 

                <div className="flex flex-row justify-around w-full"> 
                  <OpponentCards 
                    side="left"  
                    isCurrentPlayerTurn={table.current_users_turn_id === "2"}
                    hand={table.user_hands_state.find((p) => p.position === "left")?.hand} /> 
                  <Deck 
                    openMoonCard={table.open_cards_moon[table.open_cards_moon.length - 1] ?? "moon_back"} 
                    openSunCard={table.open_cards_sun[table.open_cards_sun.length - 1] ?? "sun_back"} />
                  <OpponentCards 
                    side="right" 
                    isCurrentPlayerTurn={table.current_users_turn_id === "4"}
                    hand={table.user_hands_state.find((p) => p.position === "right")?.hand} /> 
                </div> 

                <div className="flex flex-row gap-4 mt-auto">  
                  <div className="flex flex-row gap-16 mt-auto border-2 border-[#9dfaee] bg-[#808b5e] rounded-xl p-4"> 
                    <UserCards userHand={table.user_hands_state.find(
                      (hand) => hand.player_id === "1"
                    )?.hand ?? {
                      card_moon: "moon_back",
                      card_sun: "sun_back"
                    }} />
                    <div className="flex flex-row mt-auto"> 
                      <Token /> 
                    </div>
                  </div>
                  <PlayerOptions playerTurn={table.current_users_turn_id} isCurrentPlayersTurn={
                    table.current_users_turn_id === "1"
                  } />
                </div> 
              </div>
            </div> :
              <div className="flex w-[100vw] h-[100vh] min-h-[100vh] min-w-[100vw] items-center justify-center content-center overflow">    
                <Button onClick={startGame} className="">
                Start game
                </Button>
              </div>
          } 
        </FadeInSlide>
        <Button onClick={startGame} className="fixed bottom-5 right-5">
          Start game
        </Button>
      </div>
    </DashboardLayout>
  );
}; 