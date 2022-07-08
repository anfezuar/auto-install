import React from "react";

import check from "../../assets/check.png";

import "./Card.css";
function Card({
  title,
  image,
  handlePressApp,
  selected = false,
  versiones = [],
}) {
  const optionsRender = () =>
    versiones.map((version) => <option value={version}>{version}</option>);
  return (
    <div className="card-container">
      <button className="button-card" onClick={() => handlePressApp(title)}>
        <h4>{title}</h4>
        <img src={image} alt={"logo del programa"} className="logo" />
        {selected && <img src={check} alt={"check"} className="check" />}
      </button>
      <select className="select-versions">{optionsRender()}</select>
    </div>
  );
}

export default Card;
