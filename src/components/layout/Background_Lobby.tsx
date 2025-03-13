import React from "react"; 

export const Background_Lobby: React.FC = () => {
  return (
    <video autoPlay muted loop style={{
      "objectFit": "cover",   
      "width": "100",
      "height": "100",
      "position": "fixed", 
      "zIndex": "-1",
    }}>         
      <source src="/lobby-background.mp4" type="video/mp4"/>       
    </video> 
  );
};