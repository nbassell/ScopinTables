import {
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  RECEIVE_REVIEW_ERRORS,
  CLEAR_REVIEW_ERRORS
} from '../actions/review_actions';

export default (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case CLEAR_REVIEW_ERRORS:
    case RECEIVE_REVIEW:
    case REMOVE_REVIEW:
      return [];
    default:
      return oldState;
  }
};