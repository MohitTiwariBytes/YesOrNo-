import React, { useState } from 'react';
import "./Home.css";

const Home = () => {
  const [text, setText] = useState(" ");
  const [showText, setShowText] = useState(false);
  const list = ["Yes!", "No!", "Maybe!", "Ask again later", "Of course!", "Try Again", "Never"];

  const handleClick = () => {
    const random = Math.floor(Math.random() * list.length);
    const selectedText = list[random];
    setText(selectedText);
    setShowText(false);

    const suggestionWheel = document.querySelector(".suggestionWheel");
    suggestionWheel.classList.add("shake");

    setTimeout(() => {
      suggestionWheel.classList.remove("shake");
      setShowText(true);
    }, 1000);
  };

  return (
    <div className='main-home'>
      <div className="header">
        <h1>Think of any question you have in your mind and then press go, The computer will answer</h1>
      </div>
      <div className="home">
        <div className="suggestionWheel">{showText ? text : " "}</div>
        <div className="button">
          <button onClick={handleClick}>Goo!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
