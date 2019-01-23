import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, login }) => {
  const sessionLinks = () => {
    return (
      <nav className="login-signup">
        <Link to='/login'>Sign in</Link>
        &nbsp;or&nbsp;
        <Link to='/signup'>Sign up</Link>
      </nav>
    );
  };

  const handleLogout = () => {
    logout().then(() => history.push('/'));
  };

  

  const personalGreeting = () => {
    return (
      <div>
        <button className="nav-button signup">Sign up</button>
        <button className="nav-button signin">Sign in</button>
        <button className="nav-button demo">Demo</button>
      </div>
    );
  }

  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;