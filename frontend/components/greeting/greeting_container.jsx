import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  signup,
  login,
  logout
} from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));