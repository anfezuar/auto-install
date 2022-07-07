import React, { useState } from "react";

import Card from "../../components/Card";
import office from "../../assets/office.png";
import chrome from "../../assets/chrome.png";
import winrar from "../../assets/winrar.png";
import vlc from "../../assets/vlc.png";

import "./Home.css";

function Home() {
  const CARDS_CONTENT = [
    { title: "Office", image: office },
    { title: "Chrome", image: chrome },
    { title: "Winrar", image: winrar },
    { title: "Vlc", image: vlc },
  ];

  const [appSelected, setAppSelected] = useState([]);

  const handlePressApp = (title) => {
    setAppSelected((prev) => {
      const newArray = prev;
      /* if (newArray.includes(title)) {
        return newArray.filter((element) => element !== title);
      } else {
        newArray.push(title);
        console.log("newArray", newArray);
        return newArray;
      } */
      if (!newArray.includes(title)) newArray.push(title);
      return newArray;
    });
    console.log(appSelected);
  };

  return (
    <React.Fragment>
      <div>
        <h1 className="title">AutoInstall</h1>
        <div className="cards-list">
          {CARDS_CONTENT.map((item, index) => (
            <Card
              {...item}
              key={index}
              handlePressApp={handlePressApp}
              selected={appSelected.includes(item.title)}
            />
          ))}
        </div>
        <div className="btn-container">
          <button className="bnt-install">{`Instalar (${appSelected.length})`}</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
