import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ShopContext from "../context/ShopContext";
import "../styles/header.css"; 

/* eslint-disable react/prop-types */
function Links({ handleOpenCart, handleMouseEnter, handleMouseLeave }) {
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
      <li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="#"
          onClick={handleOpenCart}
        >
          <span>Cart</span>
          <span className="cart-icon">{cartItems.length}</span>
        </Link>
      </li>
    </ul>
  );
}

export default function Header({ handleOpenCart, handleMouseEnter, handleMouseLeave }) {
  return (
    <header>
      <div className="logo">Very Awesome Shop</div>
      <nav>
        <Links
          handleOpenCart={handleOpenCart}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </nav>
    </header>
  );
}
