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
      this.props.signup(user).then(() => this.props.history.push('/'));
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
      <div className="signup-form">
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <div>
            <input
              className="signup-input"
              type="text"
              value={this.state.f_name}
              placeholder="First name *"
              onChange={this.update('f_name')}
              />
            <br />
            <input
              className="signup-input"
              type="text"
              value={this.state.l_name}
              placeholder="Last name *"
              onChange={this.update('l_name')}
              />
            <br />
            <input
              className="signup-input"
              type="email"
              value={this.state.email}
              placeholder="Enter email *"
              onChange={this.update('email')}
            />
            <br />
            <input
              className="signup-input"
              type="password"
              value={this.state.password}
              placeholder="Enter password *"
              onChange={this.update('password')}
            />
            <br />
            <input
              className="signup-input"
              type="password"
              value={this.state.passwordConfirmation}
              placeholder="Re-enter password *"
              onChange={this.update('passwordConfirmation')}
            />
            <br />
            <input
              className="signup-input"
              type="text"
              value={this.state.primary_dining_location}
              placeholder="Primary Dining Location *"
              onChange={this.update('primary_dining_location')}
            />
            <br />
            <input className="signup-submit" type="submit" value="Create Account"></input>
            
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;