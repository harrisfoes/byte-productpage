import React from "react";

function BenefitCard({ image, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center py-4  pb-8 text-center">
      <img src={image} alt="image" />
      <h1 className="text-darkblue py-4 text-xl">{title}</h1>
      <div className="w-3/4 pb-12 text-sm text-neutral-600">{description}</div>
      <div className="h-[0.5px] w-2/3 bg-neutral-300 px-8 opacity-40 shadow-lg"></div>
    </div>
  );
}

export default BenefitCard;
