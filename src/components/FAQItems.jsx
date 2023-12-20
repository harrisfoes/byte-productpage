import React, { useState } from "react";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mx-auto w-[80%] border-t-2  border-t-neutral-200">
      <div
        className="flex cursor-pointer items-center justify-between rounded-md bg-gray-200 p-4"
        onClick={toggleAccordion}
      >
        <div className="text-darkblue text-lg font-medium">{question}</div>
        <div className="text-darkblue text-3xl font-semibold">
          {isOpen ? "-" : "+"}
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 rounded-md bg-white p-4 text-sm text-neutral-300">
          {answer}
        </div>
      )}
    </div>
  );
}

function FAQItems() {
  const items = [
    {
      question: "lorem ipsum dolor sit amet",
      answer:
        "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
    },
    {
      question: "lorem ipsum dolor sit amet",
      answer:
        "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
    },
    {
      question: "lorem ipsum dolor sit amet",
      answer:
        "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
    },
    {
      question: "lorem ipsum dolor sit amet",
      answer:
        "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
    },
    {
      question: "lorem ipsum dolor sit amet",
      answer:
        "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
    },
    {
      question: "lorem ipsum dolor sit amet",
      answer:
        "Our fabrics and garments are made in Portugal. We build strong relationships with our immediate suppliers and visit as often as possible. ",
    },
  ];
  return (
    <div className="mb-8">
      {items.map((items) => (
        <FAQItem
          question={items.question}
          answer={items.answer}
          key={items.question}
        />
      ))}

      <div className="mx-auto h-2 w-[80%] border-b border-b-neutral-200"></div>
    </div>
  );
}

export default FAQItems;
