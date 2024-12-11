import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/images/Ceeman logo white BLUE 1.svg";
import { IoCartOutline } from "react-icons/io5";
import { logout } from "../actions/authActions";
import { fetchTotalCartItems } from "../actions/cartActions";
import { viewProducts } from "../actions/productActions";
import toast from "react-hot-toast";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth || {});
  const dispatch = useDispatch();
  const { totalCartItems } = useSelector((state) => state.cart || {});
  const location = useLocation(); // Use useLocation to get current location

  useEffect(() => {
    dispatch(viewProducts());
    dispatch(fetchTotalCartItems()); // Fetch total cart items on component mount
  }, [dispatch]);

  useEffect(() => {
    console.log("Total Cart Items:", totalCartItems); // Log totalCartItems
  }, [totalCartItems]); // Log whenever totalCartItems changes

  const toggleMenu = () => {
    setShowNav(!showNav);
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successfully");
  };

  // Function to determine the active class based on route match
  const getNavLinkClass = (path) =>
    location.pathname === path ? "text-[#E8998D]" : "text-white";

  return (
    <>
      <div className="w-full font-gilroy z-10 !bg-transparent py-[1rem] lg:px-[2rem] md:px-[1rem] px-4">
        <nav className="rounded-lg bg-[#2544D8] py[-1rem] shadow-custom">
          <div className="max-w-screen-xl flex  flex-wrap items-center justify-between mx-auto py-1 px-3">
            <NavLink to="/" className="flex items-center">
              <img src={Logo} className="md:h-14 h-8 mr-3" alt="Ceeman Logo" />
              <span className="self-center specialText text-3xl font-semibold whitespace-nowrap dark:text-white"></span>
            </NavLink>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              onClick={() => toggleMenu()}
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className={`w-full md:block md:w-auto ${
                !showNav ? "hidden" : ""
              }`}
              id="navbar-default"
            >
              <ul className=" lg:text-base text-xs lg:gap-20 md:gap-6 gap-2 font-normal flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:items-center  md:mt-0 md:border-0 md:bg-transparent bg-[#2544D8] dark:border-gray-700">
                <li>
                  <NavLink
                    to="/"
                    className={`block py-2  px-3 rounded md:bg-transparent md:p-0  transition-all duration-700 ${getNavLinkClass(
                      "/"
                    )}`}
                    exact
                  >
                    Home
                    <hr className="w-7" />
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink
                    to="/product"
                    className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-400 md:p-0  transition-all duration-700 ${getNavLinkClass(
                      "/product"
                    )}`}
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={`block py-2 pl-3 pr-4 rounded transition-all ease-in-out duration-1000 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-400 md:p-0   ${getNavLinkClass(
                      "/about"
                    )}`}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/agent"
                    className={`block py-1 px-1 md:mb-0 mb-3 border-white border-[0.5px]  hover:bg-gray-100 md:hover:bg-transparent  md:px-2 md:py-1 md:hover:text-cyan-400 md:p-0  md:dark:hover:text-[#E8998D] md:dark:hover:bg-white transition-all ease-in-out duration-1000 hover:px-5 dark:hover:text-white md:dark:hover:bg-transparent ${getNavLinkClass(
                      "/agent"
                    )}`}
                  >
                    Become a Distributor
                  </NavLink>
                </li>
                {isAuthenticated ? (
                  <li className="bg-white px-3 py-1 text-[#2544D8]">
                    <button
                      onClick={handleLogout}
                      className="block py-1  px-10 text-gray-900 bg-white shadow-sm rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-black md:dark:hover:text-[#E8998D] dark:hover:bg-gray-700 transition-all ease-in-out duration-1000 dark:hover:text-white md:dark:hover:bg-transparent "
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <li className="bg-white px-10 py-1 text-[#2544D8]">
                    <NavLink
                      to="/signin"
                      className={`block md:py-1 py-1 px-10 hover:bg-gray-100  text-xs  shadow-sm  md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 text-[#2544D8] dark:text-[#2544D8] md:dark:hover:text-[#2544D8] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-1000 ${getNavLinkClass(
                        "/signin"
                      )}`}
                    >
                      Sign In
                    </NavLink>
                  </li>
                )}
                <li class="font-sans flex items-center   mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-sm text-white ">
                  <a
                    href="/checkout"
                    role="button"
                    class="relative flex max-w-[50px]"
                  >
                    <IoCartOutline className="" size={34} />
                    <span className="absolute right-0  top-0 rounded-full flex justify-center items-center bg-white w-4 h-4 top right p-0 m-0 text-black font-mono text-[9px]  leading-tight text-center">
                      {totalCartItems !== null && totalCartItems !== undefined
                        ? totalCartItems
                        : 0}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
