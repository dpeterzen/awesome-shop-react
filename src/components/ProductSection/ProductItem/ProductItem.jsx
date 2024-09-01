import "./ProductItem.css";

const ProductItem = ({ name, price, stock, image }) => {
  return (
    <div className="product-item">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Stock: {stock}</p>
      </div>
      <button className="top-right-button">Top Right</button>
      <button className="bottom-right-button">Bottom Right</button>
    </div>
  );
  };
  
  export default ProductItem;