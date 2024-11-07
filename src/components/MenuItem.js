import React, { useState } from "react";

function MenuItem({ item, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    onAddToCart({ ...item, quantity });
    setQuantity(1); // 수량 초기화
  };

  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p>{item.price}원</p>
      <div className="menu-item__controls">
        <label>수량:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button onClick={addToCart}>추가하기</button>
      </div>
    </div>
  );
}

export default MenuItem;
