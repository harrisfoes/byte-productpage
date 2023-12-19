import React from "react";
import HeroHighlightCard from "./HeroHighlightCard";
import daynight from "../assets/images/daynight.svg";
import nowaste from "../assets/images/nowaste.svg";
import comfy from "../assets/images/comfy.svg";

function HeroHighlights() {
  const cardData = [
    {
      image: daynight,
      text: "Beautiful, comfortable loungewear for day or night.",
    },
    {
      image: nowaste,
      text: "No wasteful extras, like tags or plastic packaging.",
    },
    {
      image: comfy,
      text: "Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.",
    },
  ];
  return (
    <div className="mx-auto mb-8 flex w-[90%] max-w-[400px] flex-col items-center">
      {cardData.map((items) => (
        <HeroHighlightCard
          key={items.text}
          icon={items.image}
          text={items.text}
        />
      ))}
    </div>
  );
}

export default HeroHighlights;
