import { useState } from 'react'
import ShopContext from './context/ShopContext';
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import './App.css';

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
