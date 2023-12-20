import React, { useState } from "react";
import daynight from "../assets/images/product/daynight.svg";
import save from "../assets/images/product/save.svg";
import ship from "../assets/images/product/ship.svg";
import pathleft from "../assets/images/pathleft.svg";
import pathright from "../assets/images/pathright.svg";

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="flex w-full flex-shrink-0 flex-col items-center justify-center  rounded-lg bg-neutral-200 py-12 text-center">
      <img src={image} alt="image" />
      <h1 className="text-darkblue py-4 text-xl">{title}</h1>
      <div className="w-3/4 text-sm text-neutral-600">{description}</div>
    </div>
  );
};

function ProductCarousel() {
  const [current, setCurrent] = useState(0);
  const content = [
    {
      image: save,
      title: "You save.",
      description: "Browse our comfort sets and save 15% when you bundle.",
    },
    {
      image: ship,
      title: "We ship.",
      description:
        "We ship your items within 1-2 days of receiving your order.",
    },
    {
      image: daynight,
      title: "You enjoy!",
      description: "Wear hernest around the house, out on the town, or in bed.",
    },
  ];

  const prev = () =>
    setCurrent((curr) => (curr === 0 ? content.length - 1 : curr - 1));

  const next = () =>
    setCurrent((curr) => (curr === content.length - 1 ? 0 : curr + 1));

  return (
    <div className="my-4 pb-4">
      <div className="relative mx-auto w-[340px]">
        <div className="mx-auto max-w-[290px] overflow-hidden">
          <div
            className="ease-out-duration-500 flex transform transition-transform"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {content.map((items) => {
              return (
                <ProductCard
                  key={items.title}
                  image={items.image}
                  title={items.title}
                  description={items.description}
                />
              );
            })}
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-between ">
          <div className="flex h-full  items-center bg-[white]">
            <button onClick={prev}>
              <img src={pathleft} alt="left arrow" />
            </button>
          </div>
          <div className="flex h-full  items-center bg-[white]">
            <button onClick={next}>
              <img src={pathright} alt="right arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;
