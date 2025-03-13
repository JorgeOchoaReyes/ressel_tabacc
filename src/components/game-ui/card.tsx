import React from "react";

export const Card: React.FC<{
  stroke: string;
  strokeWidth: number;
}> = ({
  stroke= "red",
  strokeWidth=0
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
  
  return (
    <svg width={width} height={height}>
      <polygon points={points} fill={"red"} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin={strokeLinejoin} />
    </svg>
  );
};