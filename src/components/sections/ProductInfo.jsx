import React from "react";
import ProductCarousel from "../ProductCarousel";
import CustomizeReviewPair from "../CustomizeReviewPair";

function ProductInfo() {
  return (
    <section>
      <h1 className="text-darkblue font-sofiapro mb-8 px-4 pt-12 text-center text-2xl leading-10 tracking-widest">
        Comfort made easy
      </h1>
      <ProductCarousel />
      <CustomizeReviewPair />
    </section>
  );
}

export default ProductInfo;
