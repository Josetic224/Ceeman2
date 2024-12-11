import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { viewCart } from "../actions/cartActions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, loading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(viewCart());
  }, [dispatch]);
  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.CartItemID}
                className="flex items-center justify-between mb-4"
              >
                <img
                  src={item.Products.imageUrl[0]}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm">Quantity: {item.quantity}</p>
                  <p className="text-sm">Price: {item.Products.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
