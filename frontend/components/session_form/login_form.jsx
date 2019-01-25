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
      <div className="session">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h1>Please sign in</h1>
          {this.renderErrors()}
          <div className="form-wrapper">
            <input
              className="form-input"
              type="text"
              value={this.state.email}
              placeholder="Email"
              onChange={this.update('email')}
            />
            <input
              className="form-input"
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.update('password')}
            />
            <button className="btn btn-session-submit">Sign in</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;