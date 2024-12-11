import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import logo from "../assets/svg/2_20240611_041530_0001.svg";
import img from "../assets/images/2 1.png";
import imgo from "../assets/images/Agent.svg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import blueTick from "../assets/images/Blue tick.png";
import { toast } from "react-hot-toast";

function Agent() {
  const initialFormData = {
    fullName: "",
    email: "",
    officeAddress: "",
    State: "",
    phoneNumber: "",
    WhyYouWantToBeACeeManAgent: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showPopup, setShowPopup] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate API call or actual fetch
      // const response = await fetch("http://localhost:3000/api/becomeAgent", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });
      // const data = await response.json();
      // console.log(data);

      // Assuming success for demonstration
      setShowPopup("Application submitted successfully!");
      toast.success("Application submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again.");
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <>
      <div className="w-full lg:h-screen md:h-screen h-full flex lg:flex-row md:flex-row flex-col">
        <Sidebar
          logo={logo}
          imageSrc={img}
          heading={`Become a Ceeman\n Distributor`}
          sizeClass={`w-[50%]  capitalize mx-auto  absolute bottom-0`}
        />
        <div className="w-full flex items-center justify-center h-full bg-white">
          <section className="w-[100%]">
            <article className="w-[85%] m-auto ">
              <div className="w-[100%] mx-auto py-20 m-auto bg-transparent flex flex-col justify-center">
                <div className="mb-[1rem]">
                  <Link to={"/"}>
                    <IoMdArrowRoundBack size={30} />
                  </Link>
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-md"></div>
                <h1 className="font-medium text-[#000] text-3xl mb-4">
                  {"Agent Application"}
                </h1>
                <div className="bg-white">
                  <form onSubmit={handleFormSubmit}>
                    <div>
                      <div className="mt-1">
                        <input
                          id="fullName"
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          placeholder="Full Name"
                          onChange={handleChange}
                          required
                          className="appearance-none placeholder:text-sm placeholder:font-bold rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-cyan-400 focus:z-10 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mt-5">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          placeholder="Email Address"
                          onChange={handleChange}
                          required
                          className="appearance-none placeholder:text-sm placeholder:font-bold rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-cyan-400 focus:z-10 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="mt-5">
                        <input
                          id="officeAddress"
                          type="text"
                          name="officeAddress"
                          value={formData.officeAddress}
                          placeholder="Office Address"
                          onChange={handleChange}
                          required
                          className="appearance-none placeholder:text-sm placeholder:font-bold rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-cyan-400 focus:z-10 sm:text-sm"
                        />
                      </div>
                      <div className="mt-5">
                        <input
                          id="State"
                          type="text"
                          name="State"
                          value={formData.State}
                          placeholder="State/Region"
                          onChange={handleChange}
                          required
                          className="appearance-none placeholder:text-sm placeholder:font-bold rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-cyan-400 focus:z-10 sm:text-sm"
                        />
                      </div>
                      <div className="mt-5">
                        <input
                          id="phoneNumber"
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          placeholder="Phone Number"
                          onChange={handleChange}
                          required
                          className="appearance-none placeholder:text-sm placeholder:font-bold rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-cyan-400 focus:z-10 sm:text-sm"
                        />
                      </div>
                      <div className="mt-5">
                        <textarea
                          id="WhyYouWantToBeACeeManAgent"
                          name="WhyYouWantToBeACeeManAgent"
                          value={formData.WhyYouWantToBeACeeManAgent}
                          placeholder="Why do you want to be a Ceeman Agent?"
                          onChange={handleChange}
                          required
                          className="appearance-none placeholder:text-sm placeholder:font-bold rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-cyan-400 focus:z-10 sm:text-sm h-32"
                        ></textarea>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full bg-[#2544D8] h-[4rem]  items-centerflex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-sm bg font-medium text-white hover:bg-[#2544D8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        {"Apply"}
                      </button>
                    </div>
                  </form>

                  {showPopup && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                      <div className="  w-full lg:h-screen bg-white bg-opacity-50  md:h-screen h-full flex lg:flex-row md:flex-row flex-col">
                        <Sidebar
                          logo={logo}
                          imageSrc={imgo}
                          heading={`Driven by Power,\nDefined by Reliability`}
                          sizeClass={`w-[50%] px-10 capitalize mx-auto  absolute bottom-0`}
                        />
                        <div className="w-full flex items-center  h-full bg-white">
                          <div className="bg-white text-[#2544D8] px-10 py-8 text-center rounded-lg w-full">
                            {" "}
                            <img
                              src={blueTick}
                              alt="Blue_Tick_For_Validation"
                              className="m-auto"
                            />
                            <h2 className="text-base font-bold mb-4">
                              Congratulations!
                            </h2>
                            <p className="mb-4 ">
                              You have successfully applied to be a Ceeman
                              Agent. We will get back to you soon!{" "}
                            </p>
                            <div className="flex flex-col gap-3 w-full">
                              <Link to={"/"}>
                                <button
                                  // onClick={() => setShowPopup(false)}
                                  className="bg-[#2544D8] text-white md:w-1/2 w-full   py-2 px-9  hover:bg-blue-600"
                                >
                                  Continue
                                </button>
                              </Link>
                              <Link to={"/product"}>
                                <button
                                  // onClick={() => setShowPopup(false)}
                                  className="bg-[#2544D8] text-white w-full md:w-1/2  py-2 px-9  hover:bg-blue-600"
                                >
                                  See Products
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </>
  );
}

export default Agent;
