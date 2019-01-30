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
    this.dropdownHandler = this.dropdownHandler.bind(this);
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

  dropdownHandler(e) {
    e.preventDefault();
    document.getElementById("dropdown").classList.toggle("show");
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
      <div className="greeting">
        <div className="greeting-notif-wrapper">
          <div className="user-dropdown">
            <button className="btn-user-dropdown" onClick={this.dropdownHandler}>Hi, {this.props.currentUser ? this.props.currentUser.f_name : null}
              <span className="dropdown-icon">
                <i className="fas fa-chevron-down"></i>
              </span>
            </button>
            <div id="dropdown" className="dropdown-content-container">
              <div className="dropdown-content">
                <div className="dropdown-arrow">
                </div>

                <div className="dropdown-user-container">
                  <div className="user-content-container">
                    <div className="user-profile">
                      Profile Link Here
                    </div>
                    <div className="user-favorites">
                      Favorites Here
                    </div>
                  </div>
                </div>

                <div className="dropdown-logout-container">
                  <button className="btn-logout" onClick={this.handleLogout}>Sign out</button>
                </div>
              </div>
            </div>
          </div>
        </  div>
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