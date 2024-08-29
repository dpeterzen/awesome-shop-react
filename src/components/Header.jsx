import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ShopContext from "../context/ShopContext";
import "../styles/header.css"; 

/* eslint-disable react/prop-types */
function Links({ handleOpenCart, handleMouseEnterCart, handleMouseLeaveCart }) {
  const { cartItems } = useContext(ShopContext); // We must pass the ShopContext object itself as an argument

  return (
    <ul>
      <li>
        <Link to="#home" onClick={handleOpenCart}>
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to="#" onClick={handleOpenCart}>
          <span>Products</span>
        </Link>
      </li>

      {/* hoverable cart link here */}
      <li
        className="cart-toggler"
        onMouseEnter={handleMouseEnterCart}
        onMouseLeave={handleMouseLeaveCart}
      >
        <Link to="#" onClick={handleOpenCart}>
          <span>Cart</span>
          <span className="cart-icon">{cartItems.length}</span>
        </Link>
      </li>
    </ul>
  );
}

export default function Header({ handleOpenCart, handleMouseEnterCart, handleMouseLeaveCart }) {
  return (
    <header>
      <div className="logo">Very Awesome Shop</div>
      <nav>
        <Links
          handleOpenCart={handleOpenCart}
          handleMouseEnterCart={handleMouseEnterCart}
          handleMouseLeaveCart={handleMouseLeaveCart}
        />
      </nav>
    </header>
  );
}
