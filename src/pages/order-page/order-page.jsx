import React from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "../../components/order-item";
import { calcTotalPrice } from "../../components/utils";
import { Footer } from "../../components/footer";
import "./order-page.scss";

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>Your cart is empty</h1>;
  }

  return (
    <div className="order-page__wrapper">
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} products for the amount {calcTotalPrice(items)} $
          </span>
        </div>
      </div>
    </div>
    <div className="order-page__footer">
      <Footer />
      </div>
    </div>
  );
  
};
