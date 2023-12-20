import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import dummy from "../assets/images/dummyface.svg";
import pathleft from "../assets/images/pathleft.svg";
import pathright from "../assets/images/pathright.svg";

function TestimonialCarousel() {
  const lorem1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste unde voluptates assumenda";
  const lorem2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at quaerat ipsum aliquid architecto iure et nam molestias nihil quidem?";
  const lorem3 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae assumenda aperiam ullam aliquam eligendi nisi.";
  const items = [
    { image: dummy, name: "Jane, S.", review: lorem1 },
    { image: dummy, name: "Jane, S.", review: lorem2 },
    { image: dummy, name: "Jane, S.", review: lorem3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prev = () =>
    setCurrentIndex((curr) => (curr === 0 ? items.length - 1 : curr - 1));

  const next = () =>
    setCurrentIndex((curr) => (curr === items.length - 1 ? 0 : curr + 1));

  return (
    <>
      <div className="relative my-10">
        <div className=" relative mx-auto w-[95%] overflow-hidden">
          <div
            className="flex transform transition-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <TestimonialCard
                  name={item.name}
                  image={item.image}
                  review={item.review}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between">
            <img src={pathleft} alt="left" onClick={prev} />
            <img src={pathright} alt="right" onClick={next} />
          </div>
        </div>
        <div className="mt-4 flex justify-center pt-4">
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
}

export default TestimonialCarousel;
