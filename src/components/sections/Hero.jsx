import React from "react";
import Logo from "../Logo";
import HeroImage from "../HeroImage";
import HeroHighlights from "../HeroHighlights";
import CustomizeButton from "../CustomizeButton";

function Hero() {
  return (
    <div>
      <div className=" flex w-full justify-center p-4">
        <Logo />
      </div>
      <h1 className="text-darkblue font-sofiapro py-2 text-center text-2xl">
        Don't apologize for being comfortable.
      </h1>
      <HeroImage />
      <HeroHighlights />
      <CustomizeButton />
    </div>
  );
}

export default Hero;
