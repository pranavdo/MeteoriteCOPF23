import React from 'react';
import './Features.css';

function Features() {
  return (
    <div className="features-container">
      <h2>Features</h2>
      <div className="feature-cards-container">
        <div className="feature-card">
          <h3>Semi-Major Axis</h3>
          <p>Half of the longest diameter of a comet's elliptical orbit, representing the average distance from the Sun.</p>
        </div>
        <div className="feature-card">
          <h3>Sidereal Orbital Period</h3>
          <p>The time a comet takes to orbit the Sun once, important for tracking and predicting its position in the sky.</p>
        </div>
        <div className="feature-card">
          <h3>Aphelion Distance</h3>
          <p>This is the point in a comet's orbit that is farthest from the Sun.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;