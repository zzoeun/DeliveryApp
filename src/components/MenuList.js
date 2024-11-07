import React from "react";
import MenuItem from "./MenuItem";

const MENU_ITEMS = [
  { name: "피자", price: 20000 },
  { name: "김치찌개", price: 9000 },
  { name: "짜장면", price: 6500 },
];

function MenuList({ onAddToCart }) {
  return (
    <div className="menu-list">
      {MENU_ITEMS.map((item) => (
        <MenuItem key={item.name} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default MenuList;
