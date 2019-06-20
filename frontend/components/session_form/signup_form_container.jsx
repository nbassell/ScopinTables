import { connect } from "react-redux";
import React from "react";
import {
  signup,
  receiveSessionErrors,
  clearSessionErrors
} from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
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