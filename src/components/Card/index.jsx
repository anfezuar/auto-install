import React from "react";

import check from "../../assets/check.png";

import "./Card.css";
function Card({ title, image, handlePressApp, selected = false }) {
  return (
    <button className="card-container" onClick={() => handlePressApp(title)}>
      <h4>{title}</h4>
      <img src={image} alt={"logo del programa"} />
      {selected && <img src={check} alt={"check"} />}
    </button>
  );
}

export default Card;
