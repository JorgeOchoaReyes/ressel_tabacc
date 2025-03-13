import React from "react";
import { motion } from "framer-motion";

export const Card: React.FC<{
  card?: string;
}> = ({ 
}) => {
  const sideLength = 200 / Math.sqrt(3);
  const height = 320;
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
  const stroke = "red";
  const strokeWidth = 0;
  
  return (
    <motion.div 
      drag 
      whileHover={{ scale: 1.1 }}
      whileDrag={{ scale: 1.2, }}
      dragMomentum = {false}
      dragConstraints = {{ top: 0, left: 0, right: 0, bottom: 0 }} 
    >
      <svg width={width} height={height}>
        <polygon points={points} fill={"red"} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin={strokeLinejoin} />
      </svg>
    </motion.div>
  );
};