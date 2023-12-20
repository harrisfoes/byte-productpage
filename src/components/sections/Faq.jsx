import React from "react";
import FAQItems from "../FAQItems";
import CustomizeReviewPair from "../CustomizeReviewPair";

function Faq() {
  return (
    <section>
      <h1 className="text-darkblue font-sofiapro mb-8 px-4 pt-12 text-center text-2xl leading-10 tracking-wide">
        frequently asked questions.
      </h1>
      <FAQItems />
      <CustomizeReviewPair />
    </section>
  );
}

export default Faq;
