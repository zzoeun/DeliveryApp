import React, { useState } from "react";
import MenuList from "./components/MenuList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCartHandler = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  const toggleCartHandler = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1>DeliveryApp</h1>
        <button className="app__cart-button" onClick={toggleCartHandler}>
          장바구니 ({cartItems.length})
        </button>
      </header>
      <MenuList onAddToCart={addToCartHandler} />
      {isCartOpen && <Cart cartItems={cartItems} onClose={toggleCartHandler} />}
    </div>
  );
}

export default App;
