import type React from "react"; 
import type { DivOrNull } from "~/utils/classes";

export const onClickDeckMoveFreeCardToDeckCard = (
  cardToHover: "deck_sun_card" | "deck_moon_card" | "open_sun_card" | "open_moon_card",
  refDeckSunCardComponent: React.MutableRefObject<DivOrNull>,
  refDeckMoonCardComponent: React.MutableRefObject<DivOrNull>, 
  freeCardRef: React.MutableRefObject<DivOrNull>,
) => { 
  let rect = { top: 0, left: 0, right: 0, bottom: 0 };
  switch(cardToHover) {
    case "deck_sun_card":
      if(refDeckSunCardComponent.current) rect = refDeckSunCardComponent.current.getBoundingClientRect();  
      break;
    case "deck_moon_card": 
      if(refDeckMoonCardComponent.current) rect = refDeckMoonCardComponent.current.getBoundingClientRect();  
      break; 
    default: 
      alert("Invalid card to hover");
  }
  if(freeCardRef.current) { 
    freeCardRef.current.style.top = `${rect.top}px`;
    freeCardRef.current.style.left = `${rect.left}px`;
    freeCardRef.current.style.right = `${rect.right}px`;
    freeCardRef.current.style.bottom = `${rect.bottom}px`; 
    freeCardRef.current.style.display = "";
  } else {
    alert("Free card ref not found");
  }
};

