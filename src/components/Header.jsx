import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ShopContext from "../context/ShopContext";
import "../styles/header.css"; 

/* eslint-disable react/prop-types */
function Links({ handleMouseEnterCart, handleMouseLeaveCart }) {
  const { cartItems } = useContext(ShopContext); // We must pass the ShopContext object itself as an argument

  return (
    <ul>
      <li>
        <Link to="#home">
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to="#">
          <span>Products</span>
        </Link>
      </li>

      {/* hoverable cart link here */}
      <li
        className="cart-link"
        onMouseEnter={handleMouseEnterCart}
        onMouseLeave={handleMouseLeaveCart}
      >
        <Link to="#">
          <span>Cart</span>
          <span className="cart-icon">{cartItems.length}</span>
        </Link>
      </li>
    </ul>
  );
}

export default function Header({ handleMouseEnterCart, handleMouseLeaveCart }) {
  return (
    <header>
      <div className="logo">Very Awesome Shop</div>
      <nav>
        <Links
          handleMouseEnterCart={handleMouseEnterCart}
          handleMouseLeaveCart={handleMouseLeaveCart}
        />
      </nav>
    </header>
  );
}
