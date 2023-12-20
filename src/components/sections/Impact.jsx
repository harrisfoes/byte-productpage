import React from "react";
import co2 from "../../assets/images/impact/co2.svg";
import h20 from "../../assets/images/impact/h2o.svg";

const ImpactCard = ({ image, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center py-4  pb-6 text-center">
      <img src={image} alt="image" />
      <h1 className="text-darkblue py-4 text-2xl font-semibold">{title}</h1>
      <div className="text-darkblue w-3/4 pb-10 text-sm">{subtitle}</div>
      <div className="h-[0.5px] w-2/3 bg-neutral-300 px-8 opacity-40 shadow-lg"></div>
    </div>
  );
};

function Impact() {
  return (
    <section>
      <div className="mt-8 bg-neutral-200 py-8">
        <h1 className="text-darkblue font-sofiapro mb-8 px-4 pt-12 text-center text-2xl leading-10 tracking-wider">
          Our Total Green Impact
        </h1>
        <ImpactCard image={co2} title="3,927 kg" subtitle="of CO2 saved" />
        <ImpactCard
          image={h20}
          title="2,546,167 days"
          subtitle="of drinking water saved"
        />
      </div>
    </section>
  );
}

export default Impact;
