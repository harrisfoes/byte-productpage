// Carousel.js
import React, { useState } from "react";
import art1 from "../assets/images/artboard1.png";
import art2 from "../assets/images/artboard2.png";
import art4 from "../assets/images/artboard4.png";
import art5 from "../assets/images/artboard5.png";
import art6 from "../assets/images/artboard6.png";

const BrandCarousel = () => {
  const items = [
    <div key="1" className="mx-auto flex w-[85%] justify-between gap-2 pt-8">
      <img src={art1} className="h-fit w-1/3" />
      <img src={art2} className="h-fit w-1/3" />
      <img src={art4} className="h-fit w-1/3" />
    </div>,
    <div key="2" className="mx-auto flex w-[85%] justify-between gap-2 pt-8">
      <img src={art2} className="h-fit w-1/3" />
      <img src={art4} className="h-fit w-1/3" />
      <img src={art5} className="h-fit w-1/3" />
    </div>,
    <div key="3" className="mx-auto flex w-[85%] justify-between gap-2 pt-8">
      <img src={art4} className="h-fit w-1/3" />
      <img src={art5} className="h-fit w-1/3" />
      <img src={art6} className="h-fit w-1/3" />
    </div>,
    // Add more items as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <h3 className="mx-auto text-center">as seen in</h3>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transform transition-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          {items.map((_, index) => (
            <button
              key={index}
              className={`mx-2 h-4 w-4 rounded-full p-2 focus:outline-none ${
                index === currentIndex
                  ? "bg-darkblue text-white"
                  : "bg-neutral-600 text-gray-700"
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandCarousel;
