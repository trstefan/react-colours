import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [colour, setColour] = useState("#ffffff");
  const randomizedColour = () => {
    const randomColour =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    setColour(randomColour);
  };

  return (
    <div className="App" style={{ backgroundColor: `${colour}` }}>
      <h1>Random Colours Generator</h1>
      <button onClick={randomizedColour}>Generate a random colour</button>
      <button
        onClick={() => {
          navigator.clipboard.writeText(colour);
          //console.log(colour);
        }}
      >
        Get the colour code
      </button>

      <h1>{colour}</h1>
    </div>
  );
};

export default App;
