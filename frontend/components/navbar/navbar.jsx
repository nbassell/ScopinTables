import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

const Navbar = () => {
    return (
      <div className="nav-container">
        <a className="nav-left" href="#/">
          <img src={window.logoURL} className="logo-img" alt="scopin-tables-logo" />
          <h1 className="logo-text">Scopin'Tables</h1>
        </a>
        <GreetingContainer />
      </div>
    );
};

export default Navbar;