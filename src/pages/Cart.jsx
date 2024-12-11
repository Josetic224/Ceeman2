import React from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
  clearCart,
  getTotals,
} from "../components/features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="wallpaper cart-container w-[100%] px-[rem]">
      {cart.cartItems.length === 0 ? (
        <article>
          <section className="px-5 md:px-10 lg:px-24">
            <Navbar />
            <section className="w-full min-h-[100vh]">
              <div className="w-[100%] text-center mt-4 text-[gray]">
                <h1 className="text-[40px] mb-5 font-bold">
                  Your Cart is Empty...🙁
                </h1>
                <h2 className="text-[26px] text-[#555] font-bold">
                  Please go back to the homepage to shop for an item...
                </h2>
                <button className="bg m-auto my-7 font-semibold rounded text-[white] py-1 px-3">
                  <Link to="/" className="flex">
                    <HiArrowNarrowLeft />
                    <span className="px-2">Start Shopping</span>
                  </Link>
                </button>
              </div>
            </section>
          </section>
          <Footer />
        </article>
      ) : (
        <div className="px-5 md:px-10 lg:px-24">
          <Navbar />
          <h2 className="w-[70%] mb-4 font-semibold text-center text-[30px] m-auto">
            Shopping Cart
          </h2>
          <div className="titles items-center font-medium gap-6 grid-cols-5 text-[14px] text-center uppercase mt-[2rem] mb-[1rem] hidden sm:grid">
            <h3 className="product-title col-span-2">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>

          <section className="cart-items w-[100%]">
            {cart.cartItems?.map((cartItem) => (
              <div
                className="cart-item w-[100%] border-t-2 py-6 grid items-center gap-2 sm:grid-cols-5"
                key={cartItem._id}
              >
                <div className="cart-product sm:col-span-2 flex pl-2">
                  <img
                    src={cartItem.image}
                    className="pb-3 w-[100px] h-[180px] max-w-[100%] mr-5"
                    alt={cartItem.title}
                  />

                  <div>
                    <h3 className="font-bold specialText capitalize">
                      {cartItem.title}
                    </h3>
                    <p className="text-[14px]">
                      {cartItem.description.split(" ").slice(0, 10).join(" ") +
                        "..."}
                    </p>
                    <p className="pb-4 pt-3">
                      {" "}
                      <strong className="specialText">For: </strong>
                      {cartItem.category}
                    </p>
                    <button
                      className="bg px-2 text-center text-[13px] uppercase font-medium rounded"
                      onClick={() => handleRemoveFromCart(cartItem)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price text-center">
                  {cartItem.price}
                </div>
                <div className="cart-product-quantity flex items-center justify-center px-2">
                  <div className="border flex rounded bg-[#eee]">
                    <button
                      className="px-5 py-3 hover:bg-[#ddd]"
                      onClick={() => handleDecreaseCart(cartItem)}
                    >
                      -
                    </button>
                    <div className="count px-5 py-3">
                      {cartItem.cartQuantity}
                    </div>
                    <button
                      className="px-5 py-3 hover:bg-[#ddd]"
                      onClick={() => handleIncreaseCart(cartItem)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-product-total-price font-bold text-center">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </section>

          <div className="cart-summary w-[95%] mb-10 text-center m-auto sm:mt-7 flex flex-col  sm:flex-row sm:justify-between">
            <button
              className="w-[100%] ml-2  text-[#333] font-bold capitalize rounded-[5px] box py-1 h-full"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
            <div className="cart-checkout m-2 mb-5">
              <div className="subtotal text-[30px] font-bold">
                <span className="font-normal">Sumtotal </span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button className="text-white capitalize font-medium rounded bg-black mt-3 py-1 px-10 w-[100%] md:h-[25%] md:text-[.7rem]">
                Check out
              </button>
              <button className="w-full text-center bg mt-3 block font-semibold rounded text-[#555] transition-all ease-in-out py-1 px-3">
                <Link
                  to="/"
                  className="flex w-[90%] items-center justify-center m-auto"
                >
                  <HiArrowNarrowLeft />
                  <span className="px-2">Continue Shopping</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
