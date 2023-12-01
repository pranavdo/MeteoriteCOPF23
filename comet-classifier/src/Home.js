import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <header className="App-header">
      <h1>Welcome to the Comet Classifier</h1>
      <p>This is where your dreams come true.</p>
      <Link to="/get-started" className="get-started-button">Get Started</Link>
    </header>
  );
}

export default Home;