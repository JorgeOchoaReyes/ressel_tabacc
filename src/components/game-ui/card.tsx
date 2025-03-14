import React from "react";
import { motion } from "framer-motion";
import { type Moon_Card, type Sun_Card } from "~/utils/classes";

export const Card: React.FC<{
  card?: Sun_Card | Moon_Card | null;
  faceDown?: boolean;
  faceUp?: boolean;
}> = ({ 
}) => {
  const sideLength = 100 / Math.sqrt(3);
  const height = 180;
  const width = sideLength * 2;
  const points = `
      ${sideLength/2},0 
      ${width-sideLength/2},0 
      ${width},${height/2} 
      ${width-sideLength/2},${height} 
      ${sideLength/2},${height} 
      0,${height/2}
    `;
  const strokeLinejoin = "round";
  const stroke = "black";
  const strokeWidth = 1;
  
  return (
    <motion.svg  
      drag 
      whileHover={{ scale: 1.1 }}
      whileDrag={{ scale: 1.2, }}
      dragMomentum = {false}
      dragConstraints = {{ top: 0, left: 0, right: 0, bottom: 0 }} 
      className="cursor-pointer" 
      width={width} height={height}
    > 
      <motion.polygon  
        points={points} fill={"red"} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin={strokeLinejoin} /> 
    </motion.svg>
  );
};