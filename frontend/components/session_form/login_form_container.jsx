import { connect } from "react-redux";
import { login, clearSessionErrors, receiveSessionErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    receiveSessionErrors: errors => dispatch(receiveSessionErrors(errors)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    openModal: () => dispatch(openModal('signup')),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);