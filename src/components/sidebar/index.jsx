import React from "react";

function Sidebar({ logo, imageSrc, heading, sizeClass }) {
  return (
    <div className="w-full  bg-[#2544D8] flex flex-col relative">
      <img src={logo} alt="img_illustration" className="w-[14%] mx-auto" />

      <h1 className="text-[#fff] font-poppins leading-10 text-center  md:text-[1.7rem] text-base mx-auto font-extrabold">
        {heading.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
        {/* let's get <br /> started */}
      </h1>

      <img
        src={imageSrc}
        alt="generator_illustration"
        className={`${sizeClass} ml-32  lg:block md:block hidden`}
      />
    </div>
  );
}

export default Sidebar;
