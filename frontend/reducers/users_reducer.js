import { RECEIVE_CURRENT_USER, RECEIVE_DETAILED_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_DETAILED_USER:
      return merge({}, oldState, { [action.user.id]: action.user });
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default usersReducer;