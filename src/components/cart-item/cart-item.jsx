import React from "react";
import "./cart-item.scss";

export const CartItem = ({ title, price }) => {
  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item_price">
        <span>{price} $</span>
      </div>
    </div>
  );
};
