import React from "react";
import man from "../assets/images/4 1.png";
import { Link } from "react-router-dom";

function Advert() {
  return (
    <section className="relative w-full bg-[#2544D8]">
      <div className="container mx-auto px-10 py-20 relative z-10">
        <div className="flex md:flex-row-reverse  flex-col items-center">
          <div className="flex flex-col lg:items-start md:items-start items-center gap-4 max-w-md md:w-1/2 lg:pr-8 md:pl-10">
            <h2 className="md:text-3xl text-xl lg:text-left md:text-left text-center font-semibold text-white uppercase ">
              ceeman delivers to you
            </h2>
            <p className="text-base md:text-left text-white text-center font-normal">
              Nationwide delivery: We deliver right to your doorstep
            </p>
            <Link to={"/product"}>
              <button className="mt-2 w-[13rem] text-white bg-[#1B191E] py-2 font-400 text-[1rem]">
                Buy Now
              </button>
            </Link>
            <img
              src={man}
              alt=""
              className="md:absolute md:top-0 md:left-0 md:-mt-28 md:-mr-0 w-full md:w-96 z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advert;
