import { useMemo } from "react";
import PropTypes from "prop-types";
import "../styles/cart.css"; 

/* eslint-disable react/prop-types */
export default function Cart({
  openCart,
  cartItems,
  handleMouseEnterCart,
  handleMouseLeaveCart,
  handleCloseCart,
}) {
  const totalPrice = useMemo(() => {
    console.log('got here');
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  // return (
  //   openCart && (<>
  //     <div className="cart">
  //       <h2>Shopping Cart</h2>
  //       <ul>
  //         {cartItems.map((item, index) => (
  //           <li key={index}>
  //             {item.name} - ${item.price} x {item.quantity}
  //           </li>
  //         ))}
  //       </ul>
  //       <p>
  //         Total Price: <strong>${totalPrice}</strong>
  //       </p>
  //       {/* Some button to checkout */}
  //     </div>
  //   </>)
  // );

  return (
    <div
      className={`cart ${openCart ? 'open' : ''}`}
      onMouseEnter={handleMouseEnterCart}
      onMouseLeave={handleMouseLeaveCart}
    >
      <button className="close-cart" onClick={handleCloseCart}>&#10005;</button>
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
  );
}

Cart.propTypes = {
  openCart: PropTypes.bool.isRequired,
  cartItems: PropTypes.array.isRequired,
};
