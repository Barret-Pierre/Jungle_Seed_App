import Banner from "./Banner";
import Description from "./Description";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import "../styles/layout.css";

import { useState } from "react";

function App() {
  const [cart, updateCart] = useState([])
  return (
    <div>
      <Banner />
      <Description />
      <div className="js-layout-inner">
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList  cart={cart} updateCart={updateCart}/>
      </div>
      <Footer />
    </div>
  )
}

export default App;
