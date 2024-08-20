import { useMemo } from "react";
import PropTypes from "prop-types";
import "../styles/cart.css"; 


export default function Cart({ openCart, cartItems }) {
  const totalPrice = useMemo(() => {
    console.log('got here');
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);



  return (
    openCart && (<>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <p>
          Total Price: <strong>${totalPrice}</strong>
        </p>
        {/* Some button to checkout */}
      </div>
    </>)

  );
}

Cart.propTypes = {
  openCart: PropTypes.bool.isRequired,
  cartItems: PropTypes.array.isRequired,
};
