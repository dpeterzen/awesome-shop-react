import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ShopContext from "../context/ShopContext";
import "../styles/header.css"; 

/* eslint-disable react/prop-types */
function Links({ handleMouseEnterCart, handleMouseLeaveCart }) {
  const { cartItems } = useContext(ShopContext); // We must pass the ShopContext object itself as an argument

  return (
    <>
    <div className="left-links">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </div>


      {/* hoverable cart link here */}
      <div
        className="cart-link"
        onMouseEnter={handleMouseEnterCart}
        onMouseLeave={handleMouseLeaveCart}
      >
        <Link to="#">
          <span>Cart</span>
          <span className="cart-icon">{cartItems.length}</span>
        </Link>
      </div>
    </>

  );
}

export default function Header({ handleMouseEnterCart, handleMouseLeaveCart }) {
  return (
    <header>
      <div className="logo">Very Awesome Shop</div>
      <nav className="nav-links">
        <Links
          handleMouseEnterCart={handleMouseEnterCart}
          handleMouseLeaveCart={handleMouseLeaveCart}
        />
      </nav>
    </header>
  );
}
