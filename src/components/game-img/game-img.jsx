import React from "react";
import "./game-img.scss";

export const GameImg = ({ image = "" }) => {
  return (
    <div className="game-img" style={{ backgroundImage: `url(${image})` }} />
  );
};
