import "./App.css";
import Cart from "./components/cart";
import { Navbar } from "./components/navbar";
import ProductDetail from "./components/productDetail";
import Products from "./components/products";
import Search from "./components/search";
import Payment from "./components/payment";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import items from "./components/data";
import { useState } from "react";


function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route
            path="/"
            element={<Products cart={cart} setCart={setCart} items={data} />}
          ></Route>
          <Route
            path="/product/:id"
            element={<ProductDetail cart={cart} setCart={setCart} />}
          ></Route>
          <Route
            path="/search/:term"
            element={<Search cart={cart} setCart={setCart} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
