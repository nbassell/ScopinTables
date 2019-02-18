import merge from "lodash/merge";
import { RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";
import { RECEIVE_RESTAURANT } from "../actions/restaurant_actions";
import { RECEIVE_DETAILED_USER } from "../actions/session_actions";

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_REVIEW:
    const newReviewIds = oldState.review_ids.includes(action.review.id) ?
    oldState.review_ids : oldState.review_ids.concat([action.review.id]);
      return merge({}, oldState, {
        [action.review.id]: action.review,
        review_ids: newReviewIds
      });
    case REMOVE_REVIEW:
      const newState = merge({}, oldState);
      delete newState[action.review.id];
      const copyIds = newState.review_ids.slice();
      const removedIdx = copyIds.indexOf(action.review.id);
      delete newState.review_ids;
      return merge(newState, {
        review_ids: copyIds.slice(0, removedIdx).concat(copyIds.slice(removedIdx+1))
      });
    case RECEIVE_RESTAURANT:
    case RECEIVE_DETAILED_USER:
      return action.reviews;
    default:
      return oldState;
  }
};
