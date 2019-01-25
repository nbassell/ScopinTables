import React from 'react';
import merge from 'lodash/merge';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      f_name: '',
      l_name: '',
      password: '',
      passwordConfirmation: '',
      primary_dining_location: '',
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
    if (this.state.password != this.state.passwordConfirmation) {
      this.props.receiveSessionErrors( ["Passwords must match"] );
    } else {
      const { email, f_name, l_name, password, primary_dining_location } = this.state;
      const user = merge({}, { email, f_name, l_name, password, primary_dining_location });
      this.props.signup(user).then(this.props.closeModal);
    }
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
        <h1>Welcome to Scopin'Tables!</h1>
          {this.renderErrors()}
          <div className="form-wrapper">
            <input
              className="form-input"
              type="text"
              value={this.state.f_name}
              placeholder="First name *"
              onChange={this.update('f_name')}
              />
            <input
              className="form-input"
              type="text"
              value={this.state.l_name}
              placeholder="Last name *"
              onChange={this.update('l_name')}
              />
            <input
              className="form-input"
              type="text"
              value={this.state.email}
              placeholder="Enter email *"
              onChange={this.update('email')}
            />
            <input
              className="form-input"
              type="password"
              value={this.state.password}
              placeholder="Enter password *"
              onChange={this.update('password')}
            />
            <input
              className="form-input"
              type="password"
              value={this.state.passwordConfirmation}
              placeholder="Re-enter password *"
              onChange={this.update('passwordConfirmation')}
            />
            <input
              className="form-input"
              type="text"
              value={this.state.primary_dining_location}
              placeholder="Primary Dining Location *"
              onChange={this.update('primary_dining_location')}
            />
            <button className="btn btn-session-submit">Create Account</button>
            
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;