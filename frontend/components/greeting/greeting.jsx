import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: this.props.currentUser, history: this.props.history,
                   logout: this.props.logout, openModal: this.props.openModal,
                   dropdownActive: false };
                   
    this.reveal = this.reveal.bind(this);
    this.close = this.close.bind(this);
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
    logout().then(() => history.push('/'));
  }

  render() {
    // debugger
    const sessionLinks = (
      <div>
        <button className="btn btn-signup" onClick={() => this.props.openModal("signup")}>
          Sign up
                </button>
        &nbsp;&nbsp;
                <button className="btn btn-signin" onClick={() => this.props.openModal("login")}>
          Sign in
                </button>
        &nbsp;&nbsp;
                {/* <button onClick={() => login(guest)}>Demo</button> */}
      </div>
    )

    const personalGreeting = (
      <div>
        <div className="dropdown">
          <button className="btn-dropdown">Hi, {this.props.currentUser ? this.props.currentUser.f_name : null}</button>
          <a href="#">Link 1</a>
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
    // return (
    //     const Greeting = ({ currentUser, logout, history, openModal }) => {
    //       const sessionLinks = () => {
    //         return <nav className="nav-right">
    //           <button className="btn btn-signup" onClick={() => openModal("signup")}>
    //             Sign up
    //           </button>
    //           &nbsp;&nbsp;
    //           <button className="btn btn-signin" onClick={() => openModal("login")}>
    //             Sign in
    //           </button>
    //           &nbsp;&nbsp;
    //           {/* <button onClick={() => login(guest)}>Demo</button> */}
    //         </nav>;
    //     };
        
    //     const personalGreeting = () => {
    //       return <div className="nav-right">
    //               <div className="dropdown">
    //                 <button className="btn-dropdown">Hi, {currentUser.f_name}</button>
    //                 <a href="#">Link 1</a>
    //                 <span className="dropdown-icon">
    //                   <i className="fas fa-chevron-down"></i>
    //                 </span>
    //               </div>
    //         </div>;
    //     }
    //   <nav>
    //     {
    //       currentUser ? personalGreeting() : sessionLinks()
    //     }
    //   </nav>
    // )

  
  // onClick={() => logout()}
  
  