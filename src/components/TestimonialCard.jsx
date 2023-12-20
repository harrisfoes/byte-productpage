import React from "react";
import testImage from "../assets/images/testi-1.png";
import fiveStar from "../assets/images/fivestar.svg";
function TestimonialCard({ image, name, review }) {
  return (
    <div className="font-suisse mx-auto w-[95%] max-w-[400px] rounded-lg border border-neutral-500 border-opacity-20 bg-[white] p-6 text-neutral-500 shadow-xl">
      <div className="flex gap-2">
        <img
          src={image}
          alt="testimonial"
          className="w-[40px] flex-shrink-0 rounded-full"
        />
        <div className="text-[.725rem]">
          <div className="flex gap-1 text-neutral-300">
            <img src={fiveStar} alt="five stars" />
            <div>One of 500+ 5 Star Reviews Online</div>
          </div>
          <div className="font-sofiapro text-sm">{name}</div>
        </div>
      </div>
      <div className="pt-2 text-sm">{review}</div>
    </div>
  );
}

export default TestimonialCard;
