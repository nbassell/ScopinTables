import { connect } from "react-redux";
import React from "react";
// import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    // navLink: <Link to='/login'>Sign in</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Sign in
      </button>
    )

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);