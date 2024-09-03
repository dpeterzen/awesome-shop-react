import { useContext } from "react";
import ShopContext from "../../context/ShopContext.jsx";
import ProductItem from "./ProductItem/ProductItem.jsx";
import ProductIcon from "./ProductIcon/ProductIcon.jsx";
import "./ProductSection.css";

const ProductSection = () => {
    const { products } = useContext(ShopContext);

    return (
        <div className="product-section">
          <div className="product-grid">
            {products.map((product) => (
              <ProductItem
                key={product.id}
                ProductIcon={ProductIcon}
                {...product}
              />
            ))}
          </div>
        </div>
      );
};

export default ProductSection;