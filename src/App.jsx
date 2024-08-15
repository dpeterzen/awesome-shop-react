import { useState } from 'react'
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import './App.css'
import ShopContext from './context/ShopContext';
import Cart from "./components/Cart";


function App() {
  const [cartItems, setCartItems] = useState(['sunglasses', 'bananas']);
  const products = ['sunglasses', 'bananas', 'tricycle'];

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
    </ShopContext.Provider>
      {openCart && <Cart products={products} />}
    </>

  );
}

export default App;
