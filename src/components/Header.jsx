import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ShopContext from "../context/ShopContext";


function Links({ openCart, handleOpenCart }) {
  const { cartItems } = useContext(ShopContext); // We must pass the ShopContext object itself as an argument


  return (
    <ul>
      {/* Other links */}
      <li>
        <Link to="#" onClick={handleOpenCart}>
          <span>Cart</span>
          <div className="cart-icon">🛒{cartItems.length}</div>
        </Link>
      </li>
    </ul>
  );
}

export default function Header({ openCart, handleOpenCart }) {
  return (
    <header>
      {/* Other header elements */}
      <nav>
        <Links openCart={openCart} handleOpenCart={handleOpenCart} />
      </nav>
    </header>
  );
}
