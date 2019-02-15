import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT_ERRORS
} from '../actions/restaurant_actions';

export default (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RESTAURANT_ERRORS:
      return action.errors;
    case RECEIVE_RESTAURANT:
    case RECEIVE_RESTAURANTS:
      return [];
    default:
      return oldState;
  }
};