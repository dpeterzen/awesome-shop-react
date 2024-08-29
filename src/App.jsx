import { useState, useEffect } from 'react'
import ShopContext from './context/ShopContext';
import Header from './components/Header';
import Cart from "./components/Cart";
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import './App.css';
import './styles/product.css';

/* eslint-disable react/prop-types */
function App() {
  const [cartItems, setCartItems] = useState([
    {name: 'sunglasses', price: 3.5, quantity: 11000},
    {name: 'bananas', price: 3.5, quantity: 27},
  ]);
  const products = [
    {name: 'sunglasses', price: 3.5, stock: 11,},
    {name: 'bananas', price: 1.5, stock: 13,},
    {name: 'tricycle', price: 11.5, stock: 2,},
  ];

  const addToCart = () => {
    null;
  }; 

  const [hoverCart, setHoverCart] = useState(false);

  const handleMouseEnterCart = () => {
    setHoverCart(true);
  };

  const handleMouseLeaveCart = () => {
    setHoverCart(false);
  };


  return (
    /* We are going to pass the things that we want to inject to these components using the value prop */
    /* This value prop will overwrite the default value */
    <>
      <ShopContext.Provider value={{ cartItems, products, addToCart }}>
        <Header
          handleMouseEnterCart={handleMouseEnterCart}
          handleMouseLeaveCart={handleMouseLeaveCart}
        />
        <div className="product-grid">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </ShopContext.Provider>
      <Cart
        hoverCart={hoverCart}
        cartItems={cartItems}
        handleMouseEnterCart={handleMouseEnterCart}
        handleMouseLeaveCart={handleMouseLeaveCart}
      />
    </>

  );
}

export default App;
