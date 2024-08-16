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
      {/* Some other content in the cart */}
      {/* Products to display */}
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
