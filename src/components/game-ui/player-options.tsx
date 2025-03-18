import React from "react";

export const PlayerOptions: React.FC = () => {
  return (
    <div className="flex flex-row gap-4 border-2 border-gray-800 p-4">
      <button className="bg-gray-800 text-white py-2 px-4 rounded-md">Select Card</button> 
      <button className="bg-gray-800 text-white py-2 px-4 rounded-md">Stand</button>
    </div>
  );
};
