import React from "react";
import FounderImage from "../FounderImage";
import FounderCopy from "../FounderCopy";

function Founder() {
  return (
    <section>
      <div className="bg-neutral-200">
        <h1 className="text-darkblue font-sofiapro mb-8 px-4 pt-12 text-center text-2xl leading-10 tracking-widest">
          Be your best self.
        </h1>
        <FounderImage />
        <FounderCopy />
      </div>
    </section>
  );
}

export default Founder;
