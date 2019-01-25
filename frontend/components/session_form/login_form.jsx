import React from "react";
import merge from "lodash/merge";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.login(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul className="error-list">
        {this.props.errors.map((error, idx) => (
          <li className="error" key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session">
        <div className="session-header">
          <h1>Please sign in</h1>
        </div>
        <form className="session-form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <input className="form-input" type="text" value={this.state.email}
                placeholder="Email" onChange={this.update("email")}/>
          <input className="form-input" type="password" value={this.state.password}
                placeholder="Password" onChange={this.update("password")} />
          <button className="btn btn-session-submit">Sign In</button>
        </form>
        <div className="no-form">
          <p>Don't want to complete the form?</p>
        </div>
        <div className="social-session">
          <a href="https://www.facebook.com/" className="facebook-google-btn">
            <i className="fab fa-facebook-f" />Continue with Facebook
          </a>
          <a href="https://accounts.google.com/signin/v2/identifier?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2F%3Fgws_rd%3Dssl&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
            className="facebook-google-btn"><i className="fab fa-google"></i>Continue with Google
          </a>
        </div>

        <div className="swap-session">
          <p className="new-user-text">New to Scopin'Tables?</p>
          <button className="btn btn-ref-signup"
                  onClick={this.props.openModal}
          >          
            Create an account
          </button>
        </div>

      </div>
    )
  }
}
export default LoginForm;