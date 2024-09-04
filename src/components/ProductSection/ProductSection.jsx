import { useContext, useState } from "react";
import ShopContext from "../../context/ShopContext.jsx";
import ProductItem from "./ProductItem/ProductItem.jsx";
import ProductIcon from "./ProductIcon/ProductIcon.jsx";
import "./ProductSection.css";

const ProductSection = () => {
    const { products } = useContext(ShopContext);

    return (
        <div className="product-section">
        <h2 className="title-count">
          Items ({products.length})
        </h2>

          <div className="product-grid">
            {products.map((product, index) => (
              <ProductItem
                key={product.id}
                ProductIcon={ProductIcon}
                isOdd={index % 2 !== 0}
                {...product}
              />
            ))}
          </div>
        </div>
      );
};

export default ProductSection;