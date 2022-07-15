import React, { useState } from "react";

import Chip from "../Chip";

import "./ChipsContainer.css";

function ChipsContainer({ chipSelected, setChipSelected }) {
  const dataChips = [
    "Todos",
    "Documentos",
    "Navegadores",
    "Compresores",
    "Reproductores",
    "Utilidades",
  ];
  const renderItems = () =>
    dataChips.map((item, index) => (
      <Chip
        title={item}
        key={index}
        selected={item === chipSelected}
        onClick={setChipSelected}
      />
    ));

  return <div className="chips-container">{renderItems()}</div>;
}

export default ChipsContainer;
