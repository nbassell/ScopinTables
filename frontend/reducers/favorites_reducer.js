import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_FAVORITE, RECEIVE_FAVORITES, REMOVE_FAVORITE } from "../actions/favorite_actions";
import { RECEIVE_DETAILED_USER } from "../actions/session_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FAVORITES:
    case RECEIVE_CURRENT_USER:
    case RECEIVE_DETAILED_USER:
      return action.favorites;
    case RECEIVE_FAVORITE:
      return state.concat(action.favorite.restaurant_id);
    case REMOVE_FAVORITE:
      const copyState = state.slice();
      const removedIdx = state.indexOf(action.favorite.restaurant_id);
      return copyState.slice(0, removedIdx).concat(copyState.slice(removedIdx + 1));
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};