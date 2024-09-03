import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ShopContext from "../../context/ShopContext";
import CartTooltip from "./CartTooltip/CartTooltip";
import NavbarCart from "./NavbarCart/NavbarCart";
import "./Header.css";
import CartIcon from "../../icons/CartIcon";

/* eslint-disable react/prop-types */
export default function Header() {
  const { cartItems } = useContext(ShopContext);
  const [openCartTooltip, setOpenCartTooltip] = useState(false);

  const handleMouseEnterCart = () => {
    setOpenCartTooltip(true);
  };

  const handleMouseLeaveCart = () => {
    setOpenCartTooltip(false);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-left">
            <div className="logo">
              <Link to="/">
                <h1>Very Awesome Shop</h1>
              </Link>
            </div>
            <div className="navbar-links">
            <Link to="/">
              <h3>Home</h3>
            </Link>
            <Link to="/shop">
              <h3>Shop</h3>
            </Link>
            </div>

          </div>

          <div className="navbar-right">
            <div className="right-icons">
              <NavbarCart handleMouseEnterCart={handleMouseEnterCart} handleMouseLeaveCart={handleMouseLeaveCart} />
            </div>
          </div>
        </nav>
      </header>
      <CartTooltip
        openCartTooltip={openCartTooltip}
        cartItems={cartItems}
        handleMouseEnterCart={handleMouseEnterCart}
        handleMouseLeaveCart={handleMouseLeaveCart}
      />
    </>
  );
}
