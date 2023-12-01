import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Features from './Features';
import FAQ from './FAQ';
import AboutUs from './AboutUs';
import Model from './Model';
import Home from './Home';
import './App.css';
import cometLogo from './images/comet_logo.png';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/" className="logo-container">
            <img src={cometLogo} alt="Comet Logo" className="comet-logo" />
          </Link>
          <ul className="nav-links">
            <li><Link to="/model">Model</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/model" component={Model} />
          <Route path="/features" component={Features} />
          <Route path="/faq" component={FAQ} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/get-started" component={Model} />
          {/* Add more routes if necessary */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;