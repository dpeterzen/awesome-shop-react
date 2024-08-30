import "./ProductItem.css";

const ProductItem = ({ name, price, stock }) => {
    return (
      <div className="product-item">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Stock: {stock}</p>
      </div>
    );
  };
  
  export default ProductItem;