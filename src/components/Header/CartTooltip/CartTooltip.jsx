import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CartTooltip.css"; 

/* eslint-disable react/prop-types */
export default function CartTooltip({
  openCartTooltip,
  cartItems,
  handleMouseEnterCart,
  handleMouseLeaveCart,
}) {
  const totalPrice = useMemo(() => {
    // console.log('got here');
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
      className={`cart ${openCartTooltip ? 'open' : ''}`}
      onMouseEnter={handleMouseEnterCart}
      onMouseLeave={handleMouseLeaveCart}
    >
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

CartTooltip.propTypes = {
  openCart: PropTypes.bool,
  cartItems: PropTypes.array.isRequired,
};
