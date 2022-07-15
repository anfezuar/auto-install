import React from "react";

import "./Chip.css";

function Chip({ title, selected, onClick }) {
  const handleClick = () => onClick(title);
  return (
    <button className={`chip ${selected && "selected"}`} onClick={handleClick}>
      <span>{title}</span>
    </button>
  );
}

export default Chip;
