import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductAdvert from "../components/ProductAdvert";
import ProductComp from "../components/ProductComp";
import Breadcrumbs from "../BreadCrumb/BreadCrumbs";
import UseScrollToTop from "../UseScrollToTop";

const Products = () => {
  UseScrollToTop();

  return (
    <div>
      <Navbar />
      <div className="w-full px-[2rem] pb-10">
        <Breadcrumbs />
        <div className="bg-white shadow-xl shadow-[#ccc] py-2">
          {" "}
          <h2 className="text-[rgb(27,25,30)] text-center font-gilroy font-normal text-2xl">
            Products
          </h2>
        </div>
      </div>
      <ProductAdvert />
      <ProductComp />
      <Footer />
    </div>
  );
};

export default Products;
