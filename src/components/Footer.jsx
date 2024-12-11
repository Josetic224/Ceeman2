import React from "react";
import logo from "../assets/images/Ceeman logo white BLUE 1.svg";
import { FiPhoneCall } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full h-full font-gilroy bg-[#222]">
      <div className="container mx-auto px-6">
        <div className=" flex items-center py-10  lg:flex-row md:flex-col md:gap-20 gap-10 flex-col ">
          <div className="flex flex-col items-start">
            <img
              src={logo}
              alt="Ceeman_logo_illustration"
              className="w-[40%] mb-4"
            />
            <p className="text-[#fff] text-base font-medium font-montserrat max-w-sm">
              Power your home, office and business with Ceeman Power Generators.
            </p>
          </div>

          <div className="grid grid-cols-1 py-10 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mx-auto">
            <div className="col-span-1">
              <h4 className="text-white font-semibold md:text-lg text-sm mb-4">
                Contact
              </h4>

              <ul className="text-white font-montserrat font-medium text-xs">
                <li>
                  <Link
                    to="/Services"
                    className="cursor-pointer inline-flex gap-3 items-center"
                  >
                    <FiPhoneCall />{" "}
                    <a href="tel:+234803312345"> +234 803312345,</a>{" "}
                    +2348084392314
                  </Link>
                </li>
                <li className="flex gap-4 ">
                  {" "}
                  <Link className="cursor-pointer inline-flex gap-3 items-center">
                    {" "}
                    <MdMailOutline />
                    <a href="mailto:royalceeman@gmail.com">
                      {" "}
                      royalceeman@gmail.com
                    </a>
                  </Link>
                </li>
                <li className="inline-flex gap-3 items-center">
                  {" "}
                  <GrLocation />{" "}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=B32%2FB33+Alaba+Int%E2%80%99l+Market+Ojo+Lagos%2C+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    B32/B33 Alaba Int’l Market Ojo Lagos, Nigeria
                  </a>
                </li>
                <li className="inline-flex gap-3 items-center ">
                  {" "}
                  <GrLocation /> No. 15 & 16 Ebrahim Mohd. Sherif <br /> Market,
                  Fikree Mkt Betten Road Deira <br /> Dubai (UAE)
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-white font-medium font-gilroy md:text-lg text-sm mb-4">
                Navigation
              </h4>
              <ul className="text-white font-montserrat font-medium text-sm ">
                <li>
                  <Link to="/" className="cursor-pointer">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="cursor-pointer">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/product" className="cursor-pointer">
                    Product
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="cursor-pointer">
                    Contact Us
                  </Link>
                </li>
              </ul>{" "}
            </div>
          </div>
        </div>
        <hr />
        <div className="w-full flex lg:flex-row md:flex-col gap-4 flex-col justify-between items-center py-4">
          <ul className="gap-4 px-[4rem] flex  items-center justify-between capitalize text-[#fff]">
            <li>
              <a href="#">policy</a>
            </li>
            <li>
              <a href="#">terms</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
          </ul>
          <h4 className="text-[#fff] w-full text-center">
            All Rights Reserved
          </h4>
          <div className="bg-[#2544D8] gap-5 shadow-inner-custom flex items-center  rounded-lg p-5 text-[#fff]">
            <a href="https://www.facebook.com/profile.php?id=61561058851281&mibextid=ZbWKwL">
              <FaFacebookF className="text-2xl" color="#fff" />
            </a>
            <a href="https://www.instagram.com/royalceeman?igsh=MWdrNDk1MjFyYnk0">
              <GrInstagram className="text-2xl" color="#fff" />
            </a>
            <a href="https://wa.me/+2348150702005">
              {" "}
              <SiWhatsapp className="text-2xl" color="#fff" />
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
