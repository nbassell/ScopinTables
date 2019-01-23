import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import {
  signup,
  receiveSessionErrors,
} from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    navLink: <Link to='/signup'>Sign up</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    receiveSessionErrors: errors => dispatch(receiveSessionErrors(errors)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);