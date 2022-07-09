import React, { useState } from "react";

// icons extracted from https://icons8.com/
import Card from "../../components/Card";
import office from "../../assets/office.svg";
import chrome from "../../assets/chrome.svg";
import winrar from "../../assets/winrar.svg";
import vlc from "../../assets/vlc.svg";

import "./Home.css";

function Home() {
  const CARDS_CONTENT = [
    {
      title: "Office",
      image: office,
      versiones: ["2019", "2016", "2013", "2010"],
    },
    { title: "Chrome", image: chrome },
    { title: "Winrar", image: winrar },
    { title: "Vlc", image: vlc },
  ];

  const [appSelected, setAppSelected] = useState([]);

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
        <input type="text" className="input-serach" />
      </div>
      <div className="cards-list">
        {CARDS_CONTENT.map((item, index) => (
          <Card
            {...item}
            key={index}
            handlePressApp={handlePressApp}
            selected={appSelected.includes(item.title)}
            appSelected={appSelected}
          />
        ))}
      </div>
      <div className="btn-container">
        <button className="bnt-install">{`Instalar (${appSelected.length})`}</button>
      </div>
    </div>
  );
}

export default Home;
