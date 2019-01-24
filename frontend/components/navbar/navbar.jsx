import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="navbar-container">
        <Link to="/" className="header-link">
          <h1>Scopin Tables</h1>
        </Link>
        <GreetingContainer />
      </div>
    );
};

export default Navbar;