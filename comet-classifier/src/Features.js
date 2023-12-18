import React from 'react';
import './Features.css';

function Features() {
  return (
    <div className="features-container">
      <h1>Features</h1>
      <div className="feature-cards-container">
        <div className="feature-card">
          <h3>Semi-Major Axis</h3>
          <p>Half of the longest diameter of a comet's elliptical orbit, representing the average distance from the Sun.</p>
        </div>
        <div className="feature-card">
          <h3>Eccentricity</h3>
          <p>The measure of how round an orbit is, with a value of one representing a perfect circle.</p>
        </div>
        <div className="feature-card">
          <h3>Sidereal Orbital Period</h3>
          <p>The time a comet takes to orbit the Sun once, important for tracking and predicting its position in the sky.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
