import React from "react";
import BenefitCard from "../components/BenefitCard";
import daynight from "../assets/images/benefits/daynight.svg";
import cloud from "../assets/images/benefits/cloud.svg";
import living from "../assets/images/benefits/living.svg";
import comfy from "../assets/images/benefits/comfy.svg";

function BenefitGroup() {
  const content = [
    {
      image: cloud,
      title: "Ethically sourced.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. ",
    },
    {
      image: daynight,
      title: "Responsibly made.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. ",
    },
    {
      image: living,
      title: "Made for living in.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. ",
    },
    {
      image: comfy,
      title: "Unimaginably comfortable.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. ",
    },
  ];
  return (
    <div className="pt-8">
      {content.map((items) => (
        <BenefitCard
          key={items.title}
          image={items.image}
          title={items.title}
          description={items.description}
        />
      ))}
    </div>
  );
}

export default BenefitGroup;
