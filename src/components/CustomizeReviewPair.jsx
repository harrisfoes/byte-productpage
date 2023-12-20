import React from "react";
import CustomizeButton from "./CustomizeButton";
import fivestar from "../assets/images/fivestar.svg";

function CustomizeReviewPair() {
  return (
    <>
      <CustomizeButton />
      <div className=" flex justify-center gap-2">
        <img src={fivestar} alt="five stars" />
        <p className="text-xs text-neutral-300">
          Over 500+ 5 Star Reviews Online
        </p>
      </div>
    </>
  );
}

export default CustomizeReviewPair;
