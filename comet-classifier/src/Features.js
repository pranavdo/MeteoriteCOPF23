import React from 'react';
import './Features.css';

function Features() {
  return (
    <div className="features-container">
      <h2>Features</h2>
      <div className="feature-cards-container">
        <div className="feature-card">
          <h3>Eccentricity</h3>
          <p>This value indicates how elliptical a comet's orbit is. It's critical for predicting the comet's trajectory and understanding its behavior.</p>
        </div>
        <div className="feature-card">
          <h3>Sidereal Orbital Period</h3>
          <p>The time a comet takes to orbit the Sun once, important for tracking and predicting its position in the sky.</p>
        </div>
        <div className="feature-card">
          <h3>Data Arc Length</h3>
          <p>The duration over which a comet has been observed, which aids in improving the accuracy of its orbital predictions.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;