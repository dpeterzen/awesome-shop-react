import { useContext } from "react";
import ProductItem from "./ProductItem/ProductItem.jsx";
import ShopContext from "../../context/ShopContext.jsx";
import "./ProductSection.css";

const ProductSection = () => {
    const { products } = useContext(ShopContext);

    return (
        <>
          <div className="product-grid">
            {products.map((product, index) => (
              <ProductItem key={index} {...product} />
            ))}
          </div>
        </>
      );
};

export default ProductSection;