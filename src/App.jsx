import { useState, useContext } from 'react'
import ShopContext from './context/ShopContext';
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import './App.css';

/* eslint-disable react/prop-types */
function App() {
  const { products } = useContext(ShopContext);

  const initialCartItems = products.slice(0, 2).map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1, // Default quantity
  }));
  const [cartItems, setCartItems] = useState(initialCartItems);


  const addToCart = ({ id, name, price, quantity }) => {
    setCartItems((prevItems) => [...prevItems, { id, name, price, quantity }]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((i) => (i.id !== id)));
  }; 

  return (
    /* We are going to pass the things that we want to inject to these components using the value prop */
    /* This value prop will overwrite the default value */
    <>
      <ShopContext.Provider value={{ cartItems, products, addToCart, removeFromCart }}>
        <Header />
        <Outlet />
      </ShopContext.Provider>
    </>
  );
}

export default App;
