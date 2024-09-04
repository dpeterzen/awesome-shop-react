import { createContext } from "react";
import { initialProducts } from "../data/products";
// import initialProducts from "../data/products";
// this import breaks with : 
// The requested module '.../src/data/products.js' doesn't
// provide an export named: 'default'

const ShopContext = createContext({
  products: initialProducts,
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export default ShopContext;
