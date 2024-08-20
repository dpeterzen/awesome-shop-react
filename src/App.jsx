import { useState } from 'react'
import ShopContext from './context/ShopContext';
import Header from './components/Header';
import Cart from "./components/Cart";
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import './App.css'


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

  const handleOpenCart = () => {
    // if (!openCart) {
    //   setOpenCart(true);
    // } else {
    //   setOpenCart(false);
    // }
    setOpenCart(!openCart);
  };

  return (
    /* We are going to pass the things that we want to inject to these components using the value prop */
    /* This value prop will overwrite the default value */
    <>
      <ShopContext.Provider value={{ cartItems, products, addToCart }}>
        <Header openCart={openCart} handleOpenCart={handleOpenCart} />
        <div className="product-grid">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </ShopContext.Provider>
      {openCart && <Cart cartItems={cartItems} />}
    </>

  );
}

export default App;
