import merge from "lodash/merge";
import { RECEIVE_RESERVATION, REMOVE_RESERVATION } from "../actions/reservation_actions";
import { RECEIVE_DETAILED_USER } from "../actions/session_actions";

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RESERVATION:
      return merge({}, oldState, { [action.reservation.id]: action.reservation });
    case REMOVE_RESERVATION:
      let newState = merge({}, oldState);
      delete newState[action.reservation.id];
      let Ids = newState.reservation_ids.slice();
      let removedIdx = Ids.indexOf(action.reservation.id);
      delete newState.reservation_ids;
      return merge(newState, {
        reservation_ids: Ids.slice(0, removedIdx).concat(Ids.slice(removedIdx + 1))
      });
    case RECEIVE_DETAILED_USER:
      return action.reservations;
    default:
      return oldState;
  }
};