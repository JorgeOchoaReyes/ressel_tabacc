import React from "react";
import { motion } from "framer-motion";
import { type Moon_Card, type Sun_Card } from "~/utils/classes";
import Image from "next/image";
import { StepForward } from "lucide-react";

export const Card: React.FC<{
  card?: Sun_Card | Moon_Card | null;
  faceDown?: boolean;
  faceUp?: boolean;
  locked?: boolean;
  deck_card?: boolean;
}> = ({ 
  card, 
  locked,
  deck_card=false
}) => { 
  const [hovering, setHovering] = React.useState(false);
  const backgroundImagePaths = {
    "sun_1":            "/deck/sand/1_sand.png",
    "sun_2":            "/deck/sand/1_sand.png",
    "sun_3":            "/deck/sand/3_sand.png",
    "sun_4":            "/deck/sand/4_sand.png",
    "sun_5":            "/deck/sand/5_sand.png",
    "sun_6":            "/deck/sand/6_sand.png",
    "sun_imposter":     "/deck/sand/imposter_sand.png",
    "sun_sylop":        "/deck/sand/sylop_sand.png",
    "sun_back":         "/deck/sand/back_sand.png",

    "moon_1":           "/deck/sun/1_sun.png",
    "moon_2":           "/deck/sun/2_sun.png",
    "moon_3":           "/deck/sun/3_sun.png",
    "moon_4":           "/deck/sun/4_sun.png",
    "moon_5":           "/deck/sun/5_sun.png",
    "moon_6":           "/deck/sun/6_sun.png",
    "moon_imposter":    "/deck/sun/imposter_sun.png",
    "moon_sylop":       "/deck/sun/sylop_sun.png",
    "moon_back":        "/deck/sun/back_sun.png",
  } as Record<Sun_Card | Moon_Card, string>;
  
   
  
  return ( 
    <motion.div 
      drag={locked ? false : true}
      whileHover={{ scale: locked ? 1 : 1.1 }}
      onHoverStart={() => {
        setHovering(true);
      }}
      onHoverEnd={() => {
        setHovering(false);
      }}
      whileDrag={{ scale: locked ? 1 : 1.2, }}
      dragMomentum = {false}
      dragConstraints = {{ top: 0, left: 0, right: 0, bottom: 0 }} 
      className="w-36 h-38 cursor-pointer object-cover flex flex-col justify-center items-center"
    > 
      <Image
        src={backgroundImagePaths[card ?? "moon_back"] ?? "/deck/sand/back_sand.png"}  
        width={120}
        height={100} 
        alt="card"
        className="unselectable"
      />
      {
        deck_card && <StepForward size={32} className={"rotate-[270deg]"} color={hovering ? "#9dfaee" : "white"}/> 
      }
    </motion.div>  
  );
};