import React from 'react';
import merge from 'lodash/merge';

class SessionForm extends React.Component {
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
    const user = merge({}, this.state);
    this.props.processForm(user);
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
            <label>Email:
                <input type="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                />
            </label>
            <br />
            <label>Password:
                <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType}></input>
          </div>
        </form>
      </div>
    );
  }

}

export default SessionForm;