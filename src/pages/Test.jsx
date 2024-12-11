import React from "react";
import imgo from "../assets/images/Agent.svg";
import blueTick from "../assets/images/Blue tick.png";
import Sidebar from "../components/sidebar";
import logo from "../assets/svg/2_20240611_041530_0001.svg";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="  w-full lg:h-screen bg-white bg-opacity-50  md:h-screen h-full flex lg:flex-row md:flex-row flex-col">
        <Sidebar
          logo={logo}
          imageSrc={imgo}
          heading={`Driven by Power,\nDefined by Reliability`}
          sizeClass={`w-[50%] px-10  capitalize mx-auto  absolute bottom-0`}
        />
        <div className="w-full flex items-center  h-full bg-white">
          <div className="bg-white  text-[#2544D8] px-10 py-8 text-center rounded-lg w-full">
            <img
              src={blueTick}
              alt="Blue_Tick_For_Validation"
              className="m-auto"
            />
            <h2 className="text-base font-bold mb-4">Congratulations!</h2>
            <p className="mb-4 ">You have successfully signed up to Ceeman.</p>
            <Link to={"/signin"}>
              <button
                // onClick={() => setShowPopup(false)}
                className="bg-[#2544D8] text-white w-full  py-2 px-9 rounded hover:bg-blue-600"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
