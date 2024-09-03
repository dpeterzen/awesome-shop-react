import { Link } from "react-router-dom";
import "./ProductItem.css";
import LightBackpack from "../../../icons/LightBackpack";

const ProductItem = ({ name, price, category, slug, ProductIcon }) => {
  return (
    <Link to={slug} >
      <div className="product-item">
        {/* <LightBackpack className="product-image" /> */}
        {/* <img src={image} alt={name} className="product-image" /> */}
        {ProductIcon && <ProductIcon slug={slug} />}
        <div className="product-info">
          <h3>{name}</h3>
          <p>{category}</p>
          <h3>${price}</h3>
        </div>
        <div className="top-right-icon">Top Right</div>
        <div className="bottom-right-icon">Bottom Right</div>
      </div>
    </Link>

  );
  };
  
  export default ProductItem;