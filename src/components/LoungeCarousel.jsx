import React from "react";
import lucille1 from "../assets/images/lucille-1.jpeg";
import lucille2 from "../assets/images/lucille-2.jpeg";
import pathleft from "../assets/images/pathleft.svg";
import pathright from "../assets/images/pathright.svg";

function LoungeCarousel() {
  const images = [
    lucille2,
    lucille2,
    lucille1,
    lucille1,
    lucille1,
    lucille1,
    lucille1,
  ];
  return (
    <>
      <div className="relative mx-auto h-[383px] overflow-hidden">
        <div className=" mx-auto w-[75%]">
          {images.map((items, index) => (
            <img key={items + index} src={items} />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button>
            <img src={pathleft} />
          </button>
          <button>
            <img src={pathright} />
          </button>
        </div>
      </div>
      <div className="font-suisse text-center text-neutral-300">
        White shirt
      </div>
    </>
  );
}

export default LoungeCarousel;
