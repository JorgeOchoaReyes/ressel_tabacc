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
import React from "react";
import { Card } from "~/components/game-ui/card";
import { motion } from "framer-motion";
import type { DivOrNull } from "~/utils/classes";
import { onClickDeckMoveFreeCardToDeckCard} from "~/utils/motions";

const imageStyle = {
  backgroundImage: "url(/deck/table.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat", 
  backgroundColor: "rgba(255,255,255,0.3)",
  backgroundBlendMode: "lighten"
};

export default function Home(){   
  const router = useRouter();
  const id = router.query.tableId;

  const {
    startGame,
    table,
    userStand,
    playerLeave,
    selectDeckCard,
    onConfirmNewCardSelection
  } = useGameManager(); 

  const userActive = table?.current_users_turn_id === "1";

  const refOpenMoonCardComponent = React.useRef<DivOrNull>(null);
  const refOpenSunCardComponent = React.useRef<DivOrNull>(null);
  const refDeckSunCardComponent = React.useRef<DivOrNull>(null);
  const refDeckMoonCardComponent = React.useRef<DivOrNull>(null); 
  const refUserSunCardComponent = React.useRef<DivOrNull>(null);
  const refUserMoonCardComponent = React.useRef<DivOrNull>(null); 
  const freeCardRef = React.useRef<DivOrNull>(null);


  return (
    <DashboardLayout title="Table"> 
      <div className="overflow-hidden bg-[#a17c3d]" style={imageStyle}> 
        <FadeInSlide>
          <Button className="fixed top-5 left-5" variant={"ghost"} onClick={async () => {
            await router.push("/lobby");
          }}>
            <ArrowLeft size={64} />
          </Button>  
          <div className="fixed top-5 right-[5rem] border-[#9dfaee] p-4 bg-[#302d25] h-24 w-80 rounded-xl"> 
            <div className="text-[#9dfaee] text-start flex justify-between w-full">  
              <div> Table ID: {id}    </div>         
              <div> Turn {table?.turn ?? 0} / {table?.max_turns ?? 0} </div> 
            </div>
            <hr className="bg-[#9dfaee] h-[2px]" /> 
            <p>
              Round {table?.round ?? 0}
            </p> 
            <p>
              Players turn: {table?.current_users_turn_id ?? 0}
            </p>
          </div>
          {
            table ? <div className="flex w-[100vw] h-[100vh] items-center justify-center content-center overflow">  
              <div className="flex flex-col gap-4 p-4 w-[100vw] h-[100vh] items-center justify-start rounded-lg overflow-hidden"> 
                <OpponentCards 
                  side="top" 
                  playerLeft={!table.players.find((p) => p.player_id === "3")}
                  isCurrentPlayerTurn={table.current_users_turn_id === "3"}
                  hand={table.user_hands_state.find((p) => p.position === "top")?.hand} />

                <div className="flex flex-row justify-around w-full">  
                  <OpponentCards 
                    side="left" 
                    playerLeft={!table.players.find((p) => p.player_id === "2")}
                    isCurrentPlayerTurn={table.current_users_turn_id === "2"}
                    hand={table.user_hands_state.find((p) => p.position === "left")?.hand} /> 
                  <Deck 
                    refOpenMoonCardComponent={refOpenMoonCardComponent}
                    refOpenSunCardComponent={refOpenSunCardComponent}
                    refDeckSunCardComponent={refDeckSunCardComponent}
                    refDeckMoonCardComponent={refDeckMoonCardComponent} 
                    openMoonCard={table.open_cards_moon[table.open_cards_moon.length - 1] ?? "moon_back"} 
                    openSunCard={table.open_cards_sun[table.open_cards_sun.length - 1] ?? "sun_back"}  
                    onClickDeckCards={(sun?: boolean, moon?: boolean) => {
                      if(sun) {
                        onClickDeckMoveFreeCardToDeckCard(
                          "deck_sun_card",
                          refDeckSunCardComponent,
                          refDeckMoonCardComponent, 
                          freeCardRef 
                        );
                      } else if(moon) {
                        onClickDeckMoveFreeCardToDeckCard(
                          "deck_moon_card",
                          refDeckSunCardComponent,
                          refDeckMoonCardComponent, 
                          freeCardRef 
                        );
                      }
                    }}
                  />
                  <OpponentCards 
                    side="right" 
                    playerLeft={!table.players.find((p) => p.player_id === "4")}
                    isCurrentPlayerTurn={table.current_users_turn_id === "4"}
                    hand={table.user_hands_state.find((p) => p.position === "right")?.hand} /> 
                </div> 

                <div className="flex flex-row gap-4 mt-auto">  
                  <div className={`flex flex-row gap-16 mt-auto border-2 ${userActive ? "border-[#9dfaee]" : "border-black"} bg-[#808b5e] rounded-xl p-4`}> 
                    <UserCards 
                      userHand={table.user_hands_state.find((hand) => hand.player_id === "1")?.hand ?? {
                        card_moon: "moon_back",
                        card_sun: "sun_back"
                      }}
                      refUserSunCardComponent={refUserSunCardComponent}
                      refUserMoonCardComponent={refUserMoonCardComponent} 
                    />
                    <div className="flex flex-row mt-auto"> 
                      <Token /> 
                    </div>
                  </div>
                  <PlayerOptions
                    playerTurn={table.current_users_turn_id} 
                    userStand={() => userStand(table.current_users_turn_id)}  
                    userActive={userActive}
                    playerLeave={async () => {
                      await playerLeave(table.current_users_turn_id);
                    }}
                    isCurrentPlayersTurn={
                      table.current_users_turn_id === "1"
                    }
                  />
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
        {
          // Free Card Space
          <motion.div 
            ref={freeCardRef} 
            drag 
            className="absolute"
            style={{ display: "none" }}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Card card="moon_sylop" />
          </motion.div>
        } 
      </div>
    </DashboardLayout>
  );
}; 