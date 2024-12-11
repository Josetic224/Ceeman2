import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Agent from "./pages/Agent";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Test from "./pages/Test";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import CartPage from "./pages/CartPage";
import { Toaster } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

const AppContent = ({ setLoading }) => {
  const location = useLocation();

  useEffect(() => {
    const simulateLoading = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds delay
      setLoading(false);
    };

    simulateLoading();
  }, [location, setLoading]);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/agent" element={<Agent />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/test" element={<Test />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product" element={<Products />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
    </Routes>
  );
};

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Toaster />
      <BrowserRouter>
        {loading && (
          <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-75 z-50">
            <ClipLoader color="#2544D8" loading={loading} size={50} />
          </div>
        )}
        <AppContent setLoading={setLoading} />
      </BrowserRouter>
    </div>
  );
}

export default App;
