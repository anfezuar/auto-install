import React, { useState } from "react";

// icons extracted from https://icons8.com/
import Card from "../../components/Card";
import ChipsContainer from "../../components/ChipsContainer";
import office from "../../assets/office.svg";
import chrome from "../../assets/chrome.svg";
import winrar from "../../assets/winrar.svg";
import vlc from "../../assets/vlc.svg";
import adobe from "../../assets/adobe.svg";
import lup from "../../assets/lup.png";

import "./Home.css";

function Home() {
  const CARDS_CONTENT = [
    {
      title: "Office",
      image: office,
      versions: ["2019", "2016", "2013", "2010"],
      category: "Documentos",
    },
    { title: "Chrome", image: chrome, category: "Navegadores" },
    { title: "Winrar", image: winrar, category: "Compresores" },
    { title: "Vlc", image: vlc, category: "Reproductores" },
    { title: "Reader", image: adobe, category: "Documentos" },
  ];

  const [appSelected, setAppSelected] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [chipSelected, setChipSelected] = useState("Todos");
  const handleChangeText = (e) => setTextSearch(e.target.value);
  const filteredData = () => {
    if (textSearch !== "") {
      return CARDS_CONTENT.filter((item) =>
        item.title.toLowerCase().includes(textSearch.toLowerCase())
      );
    }
    if (chipSelected !== "Todos") {
      return CARDS_CONTENT.filter((item) => item.category === chipSelected);
    }
    return CARDS_CONTENT;
  };

  const handlePressApp = (title) => {
    setAppSelected((prev) =>
      prev.includes(title)
        ? prev.filter((element) => element !== title)
        : prev.concat(title)
    );
  };

  return (
    <div className="autoinstall-container">
      <h1 className="title">AutoInstall</h1>
      <div className="search-container">
        <input
          type="text"
          className="input-serach"
          onChange={handleChangeText}
        />
        <img src={lup} alt="buscar" className="icon-search" />
      </div>

      <ChipsContainer
        chipSelected={chipSelected}
        setChipSelected={setChipSelected}
      />
      <div className="btn-container">
        <button
          className="bnt-install"
          disabled={appSelected.length < 1}
        >{`Instalar (${appSelected.length})`}</button>
      </div>
      <div className="cards-list">
        {filteredData().map((item, index) => (
          <Card
            {...item}
            key={index}
            handlePressApp={handlePressApp}
            selected={appSelected.includes(item.title)}
            appSelected={appSelected}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
