
import merge from "lodash/merge";
import { RECEIVE_RESERVATION, REMOVE_RESERVATION } from "../actions/reservation_actions";
import { RECEIVE_DETAILED_USER } from "../actions/session_actions";

export default (oldState = {}, action => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATION:
      return merge({}, oldState, { [action.reservation.id]: action.reservation })
    case REMOVE_RESERVATION:
      let newState = merge({}, oldState);
      delete newState[action.reservation.id];
      let 
      return merge({}, oldState);
    default:
      return oldState;
  }
})