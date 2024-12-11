import React from "react";
import Nav from "../components/Navbar";
// import Hero from "../../components/hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import img from "../assets/images/2 1.png";
import man from "../assets/images/CEEMAN IMG (3) 1.png";
import check from "../assets/images/ic_twotone-check.png";
import Card from "../components/Card";
import img1 from "../assets/images/openmoji_light-bulb.png";
import img2 from "../assets/images/openmoji_light-bulb (1).png";
import img3 from "../assets/images/openmoji_light-bulb (2).png";

function About() {
  return (
    <>
      <section className="w-full font-poppins overflow-y-scroll no-scrollbar">
        <div className="">
          <Nav />
          <div className="py-20">
            <div className="flex md:flex-row flex-col justify-between">
              <div className="container max-w-2xl  lg:text-left md:text-center text-center mx-auto  px-10">
                <h1 className="md:text-3xl text-xl mb-5  capitalize font-bold text-[#2544D8]">
                  About us
                </h1>
                <h3 className="md:text-3xl text-xl max-w-md   font-bold">
                  Welcome to Ceeman Power Generator Company
                </h3>
                <p className="md:text-sm max-w-md text-xs py-3">
                  At Ceeman Power Generator Company, we are dedicated to
                  providing reliable, efficient, and innovative power solutions
                  to meet the diverse needs of our customers nationwide. With a
                  strong commitment to excellence and customer satisfaction, we
                  pride ourselves on delivering top-quality power generators
                  that ensure uninterrupted power supply for homes, businesses,
                  and industrial applications.
                </p>
                <Link to={"/product"}>
                  <button className="mt-10 bg-[#2544D8] md:w-1/4 w-full text-white py-2 shadow-custom">
                    See Products
                  </button>
                </Link>
              </div>
              <div>
                <img
                  src={img}
                  alt="generator_illustration_photo"
                  className="md:w-[38rem] w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="relative w-full bg-[#2544D8]">
          <div className="container mx-auto px-10 py-10 relative z-10">
            <div className="flex md:flex-row-reverse flex-col items-center">
              <div className="flex flex-col text-white md:items-start items-center gap-4 max-w-md md:w-[80%] md:pr-8">
                <h2 className="text-[2rem] font-bold text-white capitalize mb-1">
                  our products
                </h2>
                <p className="text-sm md:text-left text-center font-normal">
                  At Ceeman Power Generator Company, we offer a comprehensive
                  range of power generators to suit various applications
                </p>
                <ul className="w-full text-xs py-2">
                  <li className="flex items-center ">
                    <img
                      src={check}
                      alt="Check_mark"
                      className="w-[1.6rem] h-[1.6rem] mr-[1rem]"
                    />
                    <span>
                      Residential Generators: Reliable and quiet generators to
                      keep your home powered during outages
                    </span>
                  </li>
                  <li className="flex items-center mt-2">
                    <img
                      src={check}
                      alt="Check_mark"
                      className="w-[1.6rem] h-[1.6rem] mr-[1rem]"
                    />
                    <span>
                      Commercial Generators: Robust and efficient solutions for
                      businesses of all sizes
                    </span>
                  </li>
                  <li className="flex items-center mt-2">
                    <img
                      src={check}
                      alt="Check_mark"
                      className="w-[1.6rem] h-[1.6rem] mr-[1rem]"
                    />
                    <span>
                      Industrial Generators: High-capacity generators designed
                      to meet the demanding power needs of industrial operations
                    </span>
                  </li>
                  <li className="flex items-center mt-2">
                    <img
                      src={check}
                      alt="Check_mark"
                      className="w-[1.6rem] h-[1.6rem] mr-[1rem]"
                    />
                    <span>
                      Portable Generators: Convenient and versatile power
                      sources for outdoor activities and emergency use
                    </span>
                  </li>
                </ul>

                <img
                  src={man}
                  alt=""
                  className="md:absolute md:top-0 md:left-0 md:-mt-20 md:-mr-0 w-full md:w-96 z-0"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex lg:flex-row md:flex-col flex-col justify-center items-center py-10 gap-4 px-[4rem] ">
          <Card
            img={img1}
            heading={"our mission"}
            description={
              "Our mission is to empower our customers with cutting-edge power generation solutions that guarantee reliability, efficiency, and sustainability. We strive to be the leading provider of power generators, recognized for our superior products, exceptional service, and unwavering commitment to quality."
            }
          />
          <Card
            img={img2}
            heading={"our vision"}
            description={
              "Our vision is to illuminate every corner of the nation with seamless power solutions, fostering growth and development in every sector. We aim to set the industry standard for innovation and customer satisfaction, ensuring that our customers can always rely on us for their power needs"
            }
          />
          <Card
            img={img3}
            heading={"our team"}
            description={
              "Our team is composed of highly skilled and experienced professionals dedicated to providing the best power solutions. From our engineers and technicians to our customer service representatives, every member of our team is committed to ensuring that our customers receive the highest level of service and support."
            }
          />
        </section>
        <Footer />
      </section>
    </>
  );
}

export default About;
