import React from "react";
import lucille1 from "../assets/images/lucille-1.jpeg";

function FounderImage() {
  return (
    <div className=" relative mx-auto h-[400px] w-[90%] p-14">
      <div className="bg-lucille1 h-full w-full bg-cover bg-center"></div>
      <div className="bg-lucille2 absolute inset-0 m-2 h-1/4 w-1/4 border-4 border-[white] bg-cover bg-center"></div>
      <div className="bg-curtains absolute bottom-0 right-0 h-1/4 w-1/4 border-4 border-[white] bg-cover bg-center"></div>
    </div>
  );
}

export default FounderImage;
