import { Link } from "react-router-dom";
import { useContext } from 'react'
import ShopContext from "../../../context/ShopContext";
import styles from "./NavbarCart.module.css";
import CartIcon from "../../../icons/CartIcon";
import BagIcon from "../../../icons/BagIcon";

/* eslint-disable react/prop-types */
const NavbarCart = ({ handleMouseEnterCart, handleMouseLeaveCart }) => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div 
      className={styles.navbarCart}
      onMouseEnter={handleMouseEnterCart}
      onMouseLeave={handleMouseLeaveCart}
    >
      <Link to="/cart">
        <div className={styles.cartContainer}>
          <BagIcon className={styles.cart}></BagIcon>
          <div className={styles.number}>{cartItems.length}</div>
        </div>
      </Link>
    </div>
  );
};

export default NavbarCart;
