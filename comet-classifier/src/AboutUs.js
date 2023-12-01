import React from 'react';
import './AboutUs.css';
import aboutUsImage from './images/about-us.png';

function AboutUs() {
  return (
    <div className="about-us">
        <h2>About Us</h2>
      <div className="about-us-header">
      <img src={aboutUsImage} alt="About Us" />
      </div>
      <p>Our mission is to provide intuitive and accurate classification tools for astronomical bodies.
        Our dedicated team of engineers and data scientists from the University of California, Berkeley has worked tirelessly to bring you state-of-the-art technology for comet classification and analysis.
        Through our website, we aim to make it easy for professionals and enthusiasts alike to access high-quality data and insights about comets.
        Whether you're conducting research or just have a passion for astronomy, Comet Classifier is here to serve as your reliable resource.
        Thank you for visiting, we hope you find the tools and information you need for your celestial explorations!</p>
    </div>
  );
}

export default AboutUs;