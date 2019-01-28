import merge from "lodash/merge";
import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS } from "../actions/restaurant_actions";

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RESTAURANT:
      return merge({}, oldState, { [action.restaurant.id]: action.restaurant });
    case RECEIVE_RESTAURANTS:
      return action.restaurants;
    default:
      return oldState;
  }
};