import { useState, useContext } from 'react'
import ShopContext from './context/ShopContext';
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import './App.css';

/* eslint-disable react/prop-types */
function App() {
  const { products } = useContext(ShopContext);
  const [cartItems, setCartItems] = useState([
    {name: 'sunglasses', price: 3.5, quantity: 11000},
    {name: 'bananas', price: 3.5, quantity: 27},
  ]);


  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  }; 

  return (
    /* We are going to pass the things that we want to inject to these components using the value prop */
    /* This value prop will overwrite the default value */
    <>
      <ShopContext.Provider value={{ cartItems, products, addToCart }}>
        <Header />
        <Outlet />
      </ShopContext.Provider>
    </>
  );
}

export default App;
