import React, { useState } from 'react';
import './Model.css';

function Model() {
  // State to manage the visibility of the comet text
  const [isCometVisible, setCometVisible] = useState(false);

  // Function to handle button click and toggle comet text visibility
  const showCometText = () => {
    setCometVisible(true);
  };

  return (
    <div className="model">
      <h2>Comet Classifier</h2>
      <div className="content">
        <div className="input-section">
          <h3>Input</h3>
          <input type="text" placeholder="eccentricity" />
          <input type="text" placeholder="sidereal orbital period" />
          <input type="text" placeholder="data arc length" />
          {/* Button to reveal the comet text */}
          <button onClick={showCometText}>Classify</button>
        </div>
        <div className="output-section">
          <h3>Output</h3>
          {/* Paragraph text that is conditionally rendered based on isCometVisible */}
          {isCometVisible && <p>This is a comet! ☄️</p>}
        </div>
      </div>
    </div>
  );
}

export default Model;