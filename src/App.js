import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Accesories from "./component/Accesories";
import Apifile from "./component/API/Apifunction";
import Foter from "./component/Foter";
import Home from "./component/Home";
import { Ipad } from "./component/Ipad";
import Iphone from "./component/Iphone";
import Mackbook from "./component/Mackbook";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import Store from "./component/Store";
import Singup from "./form/Singup";
import Login from "./form/Login";
import PrivateComponent from "./component/PrivateComponent";

import { useState } from "react";
import CartList from "./component/CartList";
import ProductSlide from "./component/ProductSlide";


function App() {
  const [cart, setCart] = useState([]);
  console.log(cart.length);

  const addtoCart = (data) => {
    alert("item in add to CartList");
    console.log(data);
    setCart([...cart, { ...data, quantity: 1 }]);
    // localStorage.setItem("product", JSON.stringify(data));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar cart={cart}/>
       
        {/* <Slider /> */}
        <Apifile>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateComponent />}>
              <Route path="/store" element={<Store />} />
              <Route
                path="/iphone"
                element={<Iphone addtoCart={addtoCart} />}
              />
              <Route path="/ipad" element={<Ipad addtoCart={addtoCart} />} />
              <Route
                path="/mackbook"
                element={<Mackbook addtoCart={addtoCart} />}
              />
              <Route
                path="/accesories"
                element={<Accesories addtoCart={addtoCart} />}
              />
              <Route path="/cart" element={<CartList cart={cart} />} />
            </Route>
            <Route path="/Signup" element={<Singup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Apifile>
        <Foter />
      </div>
    </BrowserRouter>
  );
}

export default App;
