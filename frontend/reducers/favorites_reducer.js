import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_FAVORITE, RECEIVE_FAVORITES, REMOVE_FAVORITE } from "../actions/favorite_actions";
import { RECEIVE_DETAILED_USER } from "../actions/session_actions";
import { union } from 'lodash';

export default (state = [], action) => {
  Object.freeze(state);
  const copyState = union([], state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user.favorited_restaurant_ids
    case RECEIVE_FAVORITES:
    case RECEIVE_DETAILED_USER:
      return action.favorites;
    case RECEIVE_FAVORITE:
      return copyState.concat(action.restaurantId);
    case REMOVE_FAVORITE:
      const removedIdx = state.indexOf(action.restaurantId);
      return copyState.slice(0, removedIdx).concat(copyState.slice(removedIdx + 1));
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};