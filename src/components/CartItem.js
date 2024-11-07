import React, { useState } from "react";

function CartItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>
        {item.price}원 x {quantity}
      </p>
      <div className="cart-item__controls">
        <button onClick={decrementQuantity}>-</button>
        <input type="number" value={quantity} readOnly />
        <button onClick={incrementQuantity}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
