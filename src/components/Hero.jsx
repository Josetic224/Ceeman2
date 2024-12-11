import React, { useState } from "react";
import gen from "../assets/images/6 3.svg";
import frame from "../assets/images/Frame 788.png";
import { Link } from "react-router-dom";
import hero from "../assets/images/Hero rectangle.svg";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

function Hero() {
  const [animate, setAnimate] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth || {}); // Get isAuthenticated from Redux state

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 300); // Reset animation state after the animation duration
  };

  return (
    <div
      className="w-full bg-white h-full font-gilroy relative"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className=" ">
        <div className="flex md:flex-row flex-col justify-between">
          <div className="container relative max-w-3xl py-20 mx-auto px-10">
            <h1 className="text-[#1B191E] max-w-[26rem] md:leading-[60px] leading-8 md:text-4xl text-xl font-semibold">
              Powering <br /> Your Future <br /> One Watt at a Time!
            </h1>
            <p className="md:text-base text-sm leading-7 font-normal">
              Reliable and Efficient Power Solutions for Every Need
            </p>

            <div className="flex md:flex-row flex-col gap-4 mt-8 py-10">
              <Link
                to="/contact"
                className="text-white bg-[#1B191E] text-center text-sm md:w-1/4 w-full px-8 py-2"
              >
                <button
                  className={`${animate ? "animate-slideInLeft" : ""}`}
                  onClick={handleClick}
                >
                  Contact Us
                </button>
              </Link>{" "}
              {!isAuthenticated && ( // Conditionally render the Sign Up button if not authenticated
                <Link
                  to="/signup"
                  className="text-center border-[#1B191E] border md:w-1/4 w-full text-sm text-black px-8 py-2"
                >
                  <button
                    className={`${animate ? "animate-slideInLeft" : ""}`}
                    onClick={handleClick}
                  >
                    Sign Up
                  </button>
                </Link>
              )}
            </div>
            <div className="w-full grid mt-10">
              <img src={frame} alt="frame_illustration" />
            </div>
          </div>

          <div>
            <img src={gen} alt="" className="md:w-[30rem] mt-10 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
