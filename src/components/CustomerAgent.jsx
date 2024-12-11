import React from "react";
import gen from "../assets/images/6 3.svg";
import { Link } from "react-router-dom";

const CustomerAgent = () => {
  return (
    <div className="relative w-full h-full font-poppins bg-[#2544D8]">
      <div className="container mx-auto px-6 md:px-10 py-20 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="flex flex-col md:items-start items-center gap-4 max-w-md md:w-1/2 md:pr-8">
            <h2 className="md:text-3xl text-xl md:text-left text-center font-semibold text-white capitalize">
              Connect With Our Customer Service Agent
            </h2>
            <p className="text-base text-white md:text-left text-center font-normal">
              Let’s guide you through making the right Ceeman Generator choice
              for your every need!
            </p>
            <Link
              to="/contact"
              className="mt-8 text-white w-[13rem] text-center bg-[#1B191E] py-2 font-400 text-[1rem]"
            >
              {" "}
              <button>Contact Us</button>
            </Link>
          </div>
          <img
            src={gen}
            alt=""
            className="md:absolute md:top-0 md:right-0 md:-mt-20 md:-mr-0 w-full md:w-96 z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerAgent;
