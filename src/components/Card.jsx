import React from "react";

function Card({ img, heading, description }) {
  return (
    <div className="w-full  h-full mx-[3rem] bg-[#E5E9FA] rounded-xl px-4 py-6 flex flex-col items-center shadow-inner-custom">
      <img src={img} alt=" icon" className="m-auto" />
      <h2 className="w-full text-center m-auto mt-1 mb-4 font-gilroy font-[700] text-[#2544D8] capitalize text-[18px]">
        {" "}
        {heading}
      </h2>
      <p className="text-center font-gilroy text-[12px]">{description}</p>
    </div>
  );
}

export default Card;
