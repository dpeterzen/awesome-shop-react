import { useMemo } from "react";
import PropTypes from "prop-types";
import "../styles/cart.css"; 


export default function Cart({ cartItems }) {
  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <div className="cart-container">
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
      <p>
        Total Price: <strong>${totalPrice}</strong>
      </p>
      {/* Some button to checkout */}
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};
