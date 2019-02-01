import {
  RECEIVE_RESERVATION,
  REMOVE_RESERVATION,
  RECEIVE_RESERVATION_ERRORS,
  CLEAR_RESERVATION_ERRORS
} from '../actions/reservation_actions';

export default (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RESERVATION_ERRORS:
      return (action.errors);
    case RECEIVE_RESERVATION:
    case REMOVE_RESERVATION:
    case CLEAR_RESERVATION_ERRORS:
      return [];
    default:
      return oldState;
  }
};