import React from "react";

function HeroHighlightCard({ icon, text }) {
  return (
    <div className="my-4 flex items-center gap-4 text-neutral-600">
      <div>
        <img src={icon} alt="day night" className="min-w-[30px]" />
      </div>
      <div className="font-sofiapro text-sm tracking-wide">{text}</div>
    </div>
  );
}

export default HeroHighlightCard;
