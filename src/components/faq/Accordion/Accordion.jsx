import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="-mb-4">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full  md:p-4 p-[12px] text-left border-b-[1px] border-neutral-300"
      >
        <div className="text-[#12305B]  md:text-[16px] p-1 text-[14px]">{title}</div>
        {/* <svg
          className="fill-black shrink-0 ml-8 mt-[9px]"
          width="16"
          height="16"
          xmlns="http://www.wborder-2 border-red-5003.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg> */}
      </button>
      
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-black text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-[#000000] text-sm p-2">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;