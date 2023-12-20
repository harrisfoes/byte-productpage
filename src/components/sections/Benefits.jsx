import React from "react";
import TestimonialCard from "../TestimonialCard";
import BrandCarousel from "../BrandCarousel";
import LoungeCarousel from "../LoungeCarousel";
import BenefitGroup from "../BenefitGroup";
import CustomizeReviewPair from "../CustomizeReviewPair";
import testi_img from "../../assets/images/testi-1.png";

function Benefits() {
  const review =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut praesentium quod obcaecati accusamus dignissimos";
  return (
    <section className="relative mb-12 pt-20">
      <div className="bottom-66 absolute z-50">
        <TestimonialCard image={testi_img} name="Jane S." review={review} />
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
      <BenefitGroup />
      <CustomizeReviewPair />
    </section>
  );
}

export default Benefits;
