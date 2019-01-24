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
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <div>
            <input
              className="signup-input"
              type="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.update('email')}
            />
            <br />
            <input
              className="signup-input"
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.update('password')}
            />
            <br />
            <input className="login-submit" type="submit" value="Sign in"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;