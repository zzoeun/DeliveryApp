import React from "react";
import CartItem from "./CartItem";

function Cart({ cartItems, onClose }) {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <div className="cart__content">
        <button className="cart__close" onClick={onClose}>
          X
        </button>
        <h2>장바구니</h2>
        {cartItems.map((item) => (
          <CartItem key={item.name} item={item} />
        ))}
        <div className="cart__total">
          <span>전체 금액: </span>
          <span>{totalAmount}원</span>
        </div>
        <div className="cart__actions">
          <button onClick={onClose}>취소</button>
          <button>결제</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
