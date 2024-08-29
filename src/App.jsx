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

  const [openCart, setOpenCart] = useState(false);
  const [hoverCart, setHoverCart] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(!openCart);
    setHoverCart(false);
  };

  const handleMouseEnterCart = () => {
    setHoverCart(true);
  };

  const handleMouseLeaveCart = () => {
    setHoverCart(false);
  };

  const handleCloseCart = () => {
    setOpenCart(false);
    setHoverCart(false);
  };

  // Added handleClickOutside to close the cart when clicking outside of it
  const handleClickOutside = (event) => {
    if (!event.target.closest('.cart') && !event.target.closest('.cart-toggler')) {
      setOpenCart(false);
    }
  };

  // Used useEffect to add and remove the event listener for clicks outside the cart
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    /* We are going to pass the things that we want to inject to these components using the value prop */
    /* This value prop will overwrite the default value */
    <>
      <ShopContext.Provider value={{ cartItems, products, addToCart }}>
        <Header
          handleOpenCart={handleOpenCart}
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
        openCart={openCart || hoverCart}
        cartItems={cartItems}
        handleMouseEnterCart={handleMouseEnterCart}
        handleMouseLeaveCart={handleMouseLeaveCart}
        handleCloseCart={handleCloseCart}
      />
    </>

  );
}

export default App;
