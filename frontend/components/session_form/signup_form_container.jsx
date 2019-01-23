import { connect } from "react-redux";
import React from "react";
// import { Link } from "react-router-dom";
import {
  signup,
  receiveSessionErrors,
} from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    // navLink: <Link to='/signup'>Sign up</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    receiveSessionErrors: errors => dispatch(receiveSessionErrors(errors)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Sign in
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);