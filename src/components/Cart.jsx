import React, { useEffect } from "react";
import { connect } from "react-redux";
import { viewCart, increaseCartItemQuantity } from "../actions/cartActions";

const Cart = ({ cartItems, loading, viewCart, increaseCartItemQuantity }) => {
  useEffect(() => {
    viewCart();
  }, [viewCart]);

  const handleIncreaseQuantity = (cartItemId, amount) => {
    increaseCartItemQuantity(cartItemId, amount);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.CartItemID}>
              <h3>{item.Products.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Unit Price: {item.unitPrice}</p>
              <button
                onClick={() => handleIncreaseQuantity(item.CartItemID, 1)}
              >
                Increase Quantity
              </button>
              {/* Add more functionality as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  loading: state.cart.loading,
});

export default connect(mapStateToProps, { viewCart, increaseCartItemQuantity })(
  Cart
);
