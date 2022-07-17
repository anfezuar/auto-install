import React from "react";

import "./Card.css";
function Card({
  title,
  image,
  handlePressApp,
  selected = false,
  versions = [],
}) {
  const optionsRender = () =>
    versions.map((version) => <option value={version}>{version}</option>);
  return (
    <div className={`card-container ${selected && "card-selected"}`}>
      <button className="button-card" onClick={() => handlePressApp(title)}>
        <img src={image} alt={"logo del programa"} className="logo" />
        <span className="title-card">{title}</span>
      </button>
      <select className="select-versions">{optionsRender()}</select>
    </div>
  );
}

export default Card;
