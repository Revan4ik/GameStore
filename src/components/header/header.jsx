import React from "react";
import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block";
import { IoGameControllerOutline } from "react-icons/io5"
import "./header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
        <IoGameControllerOutline className="header__tittle-logo" size={40}/>
        </Link>
        <div className="header__nav">
        <Link to="/" className="header__nav-list"><p className="header__nav-menu">Store</p></Link>
        <Link to="/faq" className="header__nav-list"><p className="header__nav-menu">FAQ</p></Link>
        </div>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
};
