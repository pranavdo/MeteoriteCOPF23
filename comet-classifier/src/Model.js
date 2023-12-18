import React, { useState } from 'react';
import './Model.css';

function Model() {
  // State to manage the input values
  const [axis, setAxis] = useState('');
  const [distance, setDistance] = useState('');
  const [period, setPeriod] = useState('');

  // State to manage the visibility of the comet text
  const [isCometVisible, setCometVisible] = useState(false);

  // Function to handle input changes
  const handleInputChange = (event, setterFunction) => {
    setterFunction(event.target.value);
  };

  // Function to handle button click and toggle comet text visibility
  const showCometText = async () => {
    try {
      // Make a POST request to the Flask server
      const response = await fetch('http://127.0.0.1:5000/model_predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ axis: parseFloat(axis), distance: parseFloat(distance), period: parseFloat(period) }),
      });

      if (response.ok) {
        // If the response is successful, parse the JSON and check if it's a comet
        const data = await response.json();
        const isComet = data.prediction === 1;

        // Update the state variable based on the prediction
        setCometVisible(isComet);
      } else {
        console.error('Error fetching prediction from server');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="model">
      <h2>Comet Classifier</h2>
      <div className="content">
        <div className="input-section">
          <h3>Input</h3>
          <input type="text" placeholder="semi-major axis" value={axis} onChange={(e) => handleInputChange(e, setAxis)} />
          <input type="text" placeholder="sidereal orbital period" value={period} onChange={(e) => handleInputChange(e, setPeriod)} />
          <input type="text" placeholder="eccentricity" value={distance} onChange={(e) => handleInputChange(e, setDistance)} />
          {/* Button to reveal the comet text */}
          <button onClick={showCometText}>Classify</button>
        </div>
        <div className="output-section">
          <h3>Output</h3>
          {/* Paragraph text that is conditionally rendered based on isCometVisible */}
          {isCometVisible ? (
            <p>This is a comet! ☄️</p>
          ) : (
            <p>This is not a comet :(</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Model;
