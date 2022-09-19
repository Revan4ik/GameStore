import React from "react";
import { FaTelegram } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import "./footer.scss"

export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__wrapper">
            <a href="https://t.me/Revan4ikk"><FaTelegram size={35} /></a>
            <a href="https://www.instagram.com/sulimapasha/"><FaInstagramSquare size={35} /></a>
            <a href="https://www.linkedin.com/in/pasha-sulima/"><FaLinkedin size={35} /></a>
        </div>
      </div>
    </div>
  );
};
