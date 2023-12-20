import React, { useState } from "react";
import lucille1 from "../assets/images/lucille-1.jpeg";
import lucille2 from "../assets/images/lucille-2.jpeg";
import pathleft from "../assets/images/pathleft.svg";
import pathright from "../assets/images/pathright.svg";

function LoungeCarousel() {
  const [current, setCurrent] = useState(0);
  const images = [
    lucille2,
    lucille1,
    lucille2,
    lucille1,
    lucille2,
    lucille1,
    lucille2,
  ];

  const prev = () =>
    setCurrent((curr) => (curr === 0 ? images.length - 1 : curr - 1));

  const next = () =>
    setCurrent((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  return (
    <>
      <div className="relative mx-auto h-[383px] overflow-hidden">
        <div
          className="ease-out-duration-500 mx-auto flex w-[80%] items-center transition-transform"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((items, index) => (
            <img
              key={items + index}
              src={items}
              className="flex justify-center"
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <div className="absolute left-0 flex h-full items-center bg-[white] px-[5%]">
            <button onClick={prev}>
              <img src={pathleft} />
            </button>
          </div>
          <div className="absolute right-0 flex h-full items-center bg-[white] px-[5%]">
            <button onClick={next}>
              <img src={pathright} />
            </button>
          </div>
        </div>
      </div>
      <div className="font-suisse text-center text-neutral-300">
        White shirt
      </div>
    </>
  );
}

export default LoungeCarousel;
