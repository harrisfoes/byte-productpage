// Carousel.js
import React, { useState } from "react";

const TestCarousel = () => {
  const items = [
    <div key="1" className="bg-blue-500 p-4">
      heyman
    </div>,
    <div key="2" className="bg-green-500 p-4">
      dudebro
    </div>,
    <div key="3" className="bg-yellow-500 p-4">
      goshdarn
    </div>,
    // Add more items as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
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
            className={`mx-2 p-2 focus:outline-none ${
              index === currentIndex
                ? "bg-gray-800 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => goToSlide(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestCarousel;
