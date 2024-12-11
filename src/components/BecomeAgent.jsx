import React from "react";
import man from "../assets/images/Become a agent Img 1.svg";
import { Link } from "react-router-dom";

const BecomeAgent = () => {
  return (
    <div className="w-full h-full bg-[#E5E9FA]">
      <div className="container mx-auto px-10 py-20">
        <div className="flex md:flex-row flex-col items-center md:justify-between gap-4">
          <img src={man} alt="" className="md:w-96 w-full  max-w-none" />

          <div className="flex flex-col md:items-start items-center gap-4 max-w-md">
            <h2 className="md:text-3xl text-xl font-semibold md:text-left text-center text-black capitalize">
              Become a Ceeman Distributor Across Nigeria{" "}
            </h2>
            <p className="text-base md:text-left text-center font-normal">
              Become a Ceeman Power Generator distributor across Nigeria{" "}
            </p>
            <Link
              to="/agent"
              className="mt-8 w-[13rem] text-white text-center bg-[#1B191E] py-2 font-400 text-[1rem]"
            >
              <button>Become a Distributor </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAgent;
