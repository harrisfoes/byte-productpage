import React from "react";

function HeroImage() {
  return (
    <div className="relative mx-auto flex h-[260px] w-[95%] items-center justify-center py-2 md:h-[360px]">
      <div className="bg-lucille2 mr-1 h-4/5 w-1/4 bg-cover"></div>
      <div className="bg-lucille1 h-full w-1/3 bg-cover bg-center"></div>
      <div className="bg-girlreading ml-1 h-4/5 w-1/4 bg-cover"></div>
    </div>
  );
}

export default HeroImage;
