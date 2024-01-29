import React, { useState } from "react";
import "./App.css";
import Popup from "reactjs-popup";
import gif from "./assets/dhoni.gif";
import song from "./assets/song.mp3";
import gambhir from "./assets/gambhir.mp4";
import ig from "./assets/ig.png";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  function isSumSeven(input) {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
      const char = input.charAt(i);

      sum += parseInt(char);
    }
    return sum === 7;
  }

  const conditions =
    inputValue.includes("7") ||
    inputValue.length === 7 ||
    isSumSeven(inputValue) ||
    inputValue.toLowerCase() === "seven";

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleButtonClick = () => {
    setShowPopup(true);
    if (conditions) {
      setIsMusicPlaying(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setIsMusicPlaying(false);
    setInputValue("");
  };

  return (
    <div className="App">
      <h1>
        Everything Exists because <b>THALA</b> exist🔥🔥
      </h1>
      <input
        className="input-field"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter something..."
      />
      <button className="confirmBtn" onClick={handleButtonClick}>
        Check
      </button>
      {conditions ? (
        <Popup open={showPopup} onClose={handleClosePopup} modal>
          <div className="content">
            <img src={gif} alt="GIF" />
            {inputValue.includes("7") && <p>You have entered 7🥳</p>}
            {inputValue.length === 7 && <p>7 characters🥳</p>}
            {inputValue.toLowerCase() === "seven" && <p>you wrote seven</p>}
            {inputValue.length > 1 && isSumSeven(inputValue) && (
              <p>It all adds up🥳</p>
            )}
            <p>Thala for a reason 🥹🥹!</p>
            {isMusicPlaying && <audio loop autoPlay src={song} />}

            <button onClick={handleClosePopup}>Close</button>
          </div>
        </Popup>
      ) : (
        <Popup open={showPopup} onClose={handleClosePopup} modal>
          <div className="content">
            <video loop className="video" autoPlay src={gambhir} />
            <p>No thala for You 😢😢!</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </Popup>
      )}
      <footer>
        <p>Made with ❤️ by Mukul</p>
        <a
          href="https://www.instagram.com/mukul_shende?igsh=MTMzZDFuOTB5bmczYg=="
          target="_blank"
          rel="noreferrer"
        >
          <img className="insta" src={ig} alt="IG icon" />
        </a>
      </footer>
    </div>
  );
}

export default App;
