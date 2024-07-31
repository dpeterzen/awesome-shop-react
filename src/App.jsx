import { useState } from 'react'
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import './App.css'
import ShopContext from './context/ShopContext';



function App() {
  const [cartItems, setCartItems] = useState([
    /* List of Items in Cart */
  ]);
  const products = null;

  const addToCart = () => {
    
  }; 

  return (
    /* We are going to pass the things that we want to inject to these components using the value prop */
    /* This value prop will overwrite the default value */
    <ShopContext.Provider value={{ cartItems, products, addToCart }}>
      <Header />
    </ShopContext.Provider>
  );
}

export default App;
