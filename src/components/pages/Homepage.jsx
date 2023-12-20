import React from "react";
import Banner from "../Banner";
import Hero from "../sections/Hero";
import Benefits from "../sections/Benefits";
import Founder from "../sections/Founder";
import ProductInfo from "../sections/ProductInfo";
import Testimonials from "../sections/Testimonials";
import Faq from "../sections/Faq";
import Impact from "../sections/Impact";
import CTA from "../sections/CTA";

function Homepage() {
  return (
    <div>
      <Banner />
      <Hero />
      <Benefits />
      <Founder />
      <ProductInfo />
      <Testimonials />
      <Faq />
      <Impact />
      <CTA />
    </div>
  );
}

export default Homepage;
