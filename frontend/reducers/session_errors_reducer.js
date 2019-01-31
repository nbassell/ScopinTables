import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS
} from '../actions/session_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';


export default (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case CLEAR_SESSION_ERRORS:
    case CLOSE_MODAL:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return (action.errors);
    default:
      return oldState;
  }
};