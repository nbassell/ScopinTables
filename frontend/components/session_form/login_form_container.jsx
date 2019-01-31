import { connect } from "react-redux";
import React from "react";
// import { Link } from "react-router-dom";
import { login, clearSessionErrors } from "../../actions/session_actions";
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
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    openModal: () => dispatch(openModal('signup')),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);