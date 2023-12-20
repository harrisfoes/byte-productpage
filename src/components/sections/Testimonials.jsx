import React from "react";
import fans_m from "../../assets/images/fans_mobile.png";
import TestimonialCarousel from "../TestimonialCarousel";
import CustomizeReviewPair from "../CustomizeReviewPair";

function Testimonials() {
  return (
    <section>
      <h1 className="text-darkblue font-sofiapro mb-8 px-4 pt-12 text-center text-2xl leading-10 tracking-wide">
        What are our fans saying?
      </h1>
      <p className="mx-auto w-[90%] pb-8 text-center text-neutral-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
        dignissimos quasi dicta ipsum laboriosam? Tempore consectetur voluptas
        dolorem voluptates, sint culpa aliquam.
      </p>
      <img src={fans_m} alt="our fans" />
      <TestimonialCarousel />
      <CustomizeReviewPair />
    </section>
  );
}

export default Testimonials;
