import React from "react";
import Banner from "../Banner";
import Hero from "../sections/Hero";
import Benefits from "../sections/Benefits";
import Founder from "../sections/Founder";
import ProductInfo from "../sections/ProductInfo";
import Testimonials from "../sections/Testimonials";
import Faq from "../sections/Faq";

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
    </div>
  );
}

export default Homepage;
