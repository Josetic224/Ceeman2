import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Advert from "../components/Advert";
import Products from "../components/Products";
import CustomerAgent from "../components/CustomerAgent";
import BecomeAgent from "../components/BecomeAgent";

function Home() {
  return (
    <>
      <section className="w-full">
        <div className="h-full relative">
          <Hero />
        </div>
        <Products /> <Advert />
        <BecomeAgent />
        <CustomerAgent />
        <div className="pt-20">
          <Footer />
        </div>
      </section>
    </>
  );
}

export default Home;
