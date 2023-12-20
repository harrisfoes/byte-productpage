// Carousel.js
import React, { useState } from "react";

import lucille1 from "../assets/images/lucille-1.jpeg";
import lucille2 from "../assets/images/lucille-2.jpeg";
import pathleft from "../assets/images/pathleft.svg";
import pathright from "../assets/images/pathright.svg";

const Carousel = () => {
  const images = [
    lucille2,
    lucille1,
    lucille2,
    lucille1,
    lucille2,
    lucille1,
    lucille2,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 transform"
        onClick={handlePrev}
      >
        {/* Add your left chevron image */}
        <img src={pathleft} alt="Left Chevron" />
      </button>

      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="mx-auto"
      />

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 transform"
        onClick={handleNext}
      >
        {/* Add your right chevron image */}
        <img src={pathright} alt="Right Chevron" />
      </button>
    </div>
  );
};

export default Carousel;
