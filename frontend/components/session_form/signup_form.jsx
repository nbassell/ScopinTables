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
      debugger
      const { email, f_name, l_name, password, primary_dining_location } = this.state;
      const user = merge({}, { email, f_name, l_name, password, primary_dining_location });
      this.props.signup(user).then(this.props.closeModal);
    }
  }

  renderErrors() {
    return (
      <ul className="errors-list">
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
          <h1>Welcome to Scopin'Tables!</h1>
        </div>
        <form className="session-form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
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
          <select name="Location" className='btn form-input location-dropdown' onChange={this.update('primary_dining_location')}>
            <option value="Location" disabled selected>Primary Dining Location *</option>
            <option value="NYC">NYC</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Miami">Miami</option>
          </select>
            <button className="btn btn-session-submit">Create Account</button>
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

        <div className="eula">
          <p>Selecting "Create Account" you are agreeing to the terms and conditions of the Scopin'Tables User Agreement and Privacy Policy.</p>
        </div>

      </div>
    );
  }
}

export default SignupForm;