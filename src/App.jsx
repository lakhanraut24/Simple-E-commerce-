import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import ProductsContextProvider from "./Global/ProductsContext";
import CartContextProvider from "./Global/CartContext";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Error from "./components/Error";

function App() {
  return (
    <div>
      <ProductsContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          
          <Routes>
            <Route path="/" exact element={<Products />} />
            <Route path="/Cart" exact element={<Cart/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
        </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
