import React from "react";
import CTAimage from "../CTAimage";
import CustomizeReviewPair from "../CustomizeReviewPair";

function CTA() {
  return (
    <section className="pb-12">
      <div>
        <h1 className="text-darkblue font-sofiapro mb-8 px-4 pt-12 text-center text-2xl leading-10 tracking-wide">
          Find something you love.
        </h1>
        <p className="font-sofiapro text-center text-neutral-600">
          Click below to browse our collection!
        </p>
        <CTAimage />
        <CustomizeReviewPair />
      </div>
    </section>
  );
}

export default CTA;
