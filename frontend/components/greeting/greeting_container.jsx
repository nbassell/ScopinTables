import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  signup,
  login,
  logout
} from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = state => {
  debugger
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));