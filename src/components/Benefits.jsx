import React from "react";
import TestimonialCard from "./TestimonialCard";
import BrandCarousel from "./BrandCarousel";
import LoungeCarousel from "./LoungeCarousel";

function Benefits() {
  return (
    <section className="relative pt-20">
      <div className="bottom-66 absolute z-50">
        <TestimonialCard />
      </div>
      <div className="bg-cream mt-20">
        <div className="w-full bg-gradient-to-b from-orange-100 via-orange-200 to-[white] py-[120px]">
          <BrandCarousel />
        </div>
      </div>

      <h1 className="text-darkblue font-sofiapro mb-8 px-4 py-2 text-center text-2xl leading-10 tracking-widest">
        Loungewear you can be proud of.
      </h1>
      <LoungeCarousel />
    </section>
  );
}

export default Benefits;
