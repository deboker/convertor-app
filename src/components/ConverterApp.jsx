import React, { useState } from "react";

function ConverterApp() {
  const [inputValue, setInputValue] = useState("");
  const [lengthResult, setLengthResult] = useState("");
  const [volumeResult, setVolumeResult] = useState("");
  const [massResult, setMassResult] = useState("");

  const convertLength = () => {
    const metersToFeet = inputValue * 3.281;
    const feetToMeters = inputValue / 3.281;
    setLengthResult(
      `${inputValue} meters = ${metersToFeet.toFixed(
        3
      )} feet | ${inputValue} feet = ${feetToMeters.toFixed(3)} meters`
    );
  };

  const convertVolume = () => {
    const litersToGallons = inputValue * 0.264;
    const gallonsToLiters = inputValue / 0.264;
    setVolumeResult(
      `${inputValue} liters = ${litersToGallons.toFixed(
        3
      )} gallons | ${inputValue} gallons = ${gallonsToLiters.toFixed(3)} liters`
    );
  };

  const convertMass = () => {
    const kilogramsToPounds = inputValue * 2.204;
    const poundsToKilograms = inputValue / 2.204;
    setMassResult(
      `${inputValue} kilograms = ${kilogramsToPounds.toFixed(
        3
      )} pounds | ${inputValue} pounds = ${poundsToKilograms.toFixed(
        3
      )} kilograms`
    );
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Metric / Imperial Unit Conversion</h1>
        <input
          type="number"
          id="input-el"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          id="input-btn"
          onClick={() => {
            convertLength();
            convertVolume();
            convertMass();
          }}
        >
          Convert
        </button>
      </div>
      <div className="flex-container">
        <div className="output">
          <h4>Length (Meter/Feet)</h4>
          <p id="length-num">{lengthResult}</p>
        </div>
        <div className="output">
          <h4>Volume (Liters/Gallons)</h4>
          <p id="volume-num">{volumeResult}</p>
        </div>
        <div className="output">
          <h4>Mass (Kilograms/Pounds)</h4>
          <p id="mass-num">{massResult}</p>
        </div>
      </div>
    </div>
  );
}

export default ConverterApp;
