import { Link } from "react-router-dom";
import { useContext } from "react";
import ShopContext from "../context/ShopContext";


function Links() {
  const { cartItems } = useContext(ShopContext); // We must pass the ShopContext object itself as an argument
  console.log('cart items--------> ', cartItems);
  return (
    <ul>
      {/* Other links */}
      <li>
        <Link to="Link to the cart">
          <span>Cart</span>
          <div className="cart-icon">{2}</div>
        </Link>
      </li>
    </ul>
  );
}

function Header() {
  return (
    <header>
      {/* Other header elements */}
      <nav>
        <Links />
      </nav>
    </header>
  );
}

export default Header;