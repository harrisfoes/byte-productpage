import React from "react";
import leftarrow from "../assets/images/leftarrow.svg";

function CustomizeButton() {
  return (
    <div>
      <button className="bg-darkblue font-suisse mx-auto my-4 flex w-[90%] max-w-[400px] items-center justify-center gap-4 rounded-lg py-4 text-center text-lg text-[white]">
        Customize Your Outfit
        <img src={leftarrow} alt="left-arrow" />
      </button>
    </div>
  );
}

export default CustomizeButton;
