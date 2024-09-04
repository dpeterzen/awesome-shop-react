import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ShopContext from "../../../context/ShopContext";
import "./ProductItem.css";
import BagIcon from "../../../icons/BagIcon";

const ProductItem = ({ id, name, price, category, slug, svgName, isOdd, ProductIcon }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const [inCart, setInCart] = useState(cartItems.some(item => item.id === id));
  // Check if the product is in the cart
  const handleBagClick = (e) => {
    e.preventDefault();
    setInCart(!inCart);
    console.log(inCart);
    return (inCart ? removeFromCart(id) : addToCart({ id, name, price, quantity: 1 }))
  };

  return (
    <Link to={slug} >
      <div className="product-item">
        <ProductIcon isOdd={isOdd} name={svgName} />
        <div className="product-info">
          <h3>{name}</h3>
          <p>{category}</p>
          <h3>${price}</h3>
        </div>
        <div className="top-right-icon">Top Right</div>
        <BagIcon
          isFilled={inCart}
          className="add-to-cart"
          onClick={(e) => handleBagClick(e)}
        />
      </div>
    </Link>

  );
  };
  
  export default ProductItem;