import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, history, openModal }) => {
  const sessionLinks = () => {
    return (
      <nav className="nav-btn-container">
        <button onClick={() => openModal('login')}>Sign in</button>
        &nbsp;&nbsp;
        <Link to='/signup'>Sign up</Link>
        &nbsp;&nbsp;
        <Link to='/login'>Demo</Link>
      </nav>
    );
  };

  const handleLogout = () => {
    logout().then(() => history.push('/'));
  };

  const personalGreeting = () => {
    return <div className="btn navbar-logout">
        <a className="btn dropdown-toggle" href="#" data-toggle="dropdown">
          Hi, {currentUser.f_name}
          <span className="dropdown-icon">
            <i className="fas fa-chevron-circle-down" />
          </span>
        </a>
        <button onClick={handleLogout}>Sign out</button>
      </div>;
  }

  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;