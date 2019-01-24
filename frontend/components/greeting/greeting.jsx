import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, history, openModal }) => {
  const sessionLinks = () => {
    return <nav className="right-nav">
        <button className="btn btn-signup" onClick={() => openModal("signup")}>
          Sign up
        </button>
        &nbsp;&nbsp;
        <button className="btn btn-signin" onClick={() => openModal("login")}>
          Sign in
        </button>
        &nbsp;&nbsp;
        {/* <button onClick={() => login(guest)}>Demo</button> */}
      </nav>;
  };

  const handleLogout = () => {
    logout().then(() => history.push('/'));
  };

  const personalGreeting = () => {
    return <div className="right-nav">
        <a className="btn dropdown-toggle" href="#" data-toggle="dropdown">
          Hi, {currentUser.f_name}
          <span className="dropdown-icon">
            <i className="fas fa-chevron-circle-down" />
          </span>
        </a>
        <button onClick={handleLogout}>Sign out</button>
      </div>;
  }


  return (
    <nav className="navbar-container">
      {
        currentUser ? personalGreeting() : sessionLinks()
      }
    </nav>
  )
}

export default Greeting;