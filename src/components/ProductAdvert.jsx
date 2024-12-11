import React from "react";
import { Link } from "react-router-dom";
import man from "../assets/images/4 1.png";

const ProductAdvert = () => {
  return (
    <section className="relative w-full bg-[#2544D8]">
      <div className="container mx-auto px-20 py-32 relative z-10">
        <div className="flex md:flex-row-reverse flex-col items-center">
          <div className="flex flex-col md:items-start items-center gap-4 max-w-md md:w-1/2 md:pr-8">
            <h2 className="md:text-3xl text-xl md:text-left text-center font-semibold text-white uppercase ">
              ceeman delivers to you
            </h2>
            <p className="text-base text-white md:text-left text-center font-normal">
              Nationwide delivery: We deliver right to your doorstep
            </p>
            <Link to={"/contact"}>
              <button className="mt-2 w-[13rem] text-white bg-[#1B191E] py-2 font-400 text-[1rem]">
                Contact Us
              </button>
            </Link>
            <img
              src={man}
              alt=""
              className="md:absolute md:top-0 md:left-0 md:-mt-10 md:-mr-0 w-full md:w-96 z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAdvert;
