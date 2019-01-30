import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: this.props.currentUser, history: this.props.history,
                   logout: this.props.logout, openModal: this.props.openModal,
                   dropdownActive: false };
                   
    this.reveal = this.reveal.bind(this);
    this.close = this.close.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  reveal() {
    this.setState({ dropdownActive: !this.state.dropdownActive });
    document.addEventListener('click', this.close);
  }

  close() {
    this.setState({ dropdownActive: !this.state.dropdownActive });
    document.removeEventListener('click', this.close);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.history.push('/'));
  }

  render() {
    const sessionLinks = (
      <div>
        <button className="btn btn-signup" onClick={() => this.props.openModal("signup")}>
          Sign up
                </button>
        &nbsp;&nbsp;
                <button className="btn btn-signin" onClick={() => this.props.openModal("login")}>
          Sign in
                </button>
      </div>
    )

    const personalGreeting = (
      <div>
        <div className="dropdown">
          <button className="btn-dropdown" onClick={this.handleLogout}>Hi, {this.props.currentUser ? this.props.currentUser.f_name : null}</button>
          <a href="#">Sign out</a>
          <span className="dropdown-icon">
            <i className="fas fa-chevron-down"></i>
          </span>
        </div>
      </div>
    )

    return (
      <nav className="nav-right">
        {(this.props.currentUser === null) ? sessionLinks : personalGreeting }
      </nav>
    );
  }
}   
export default Greeting;