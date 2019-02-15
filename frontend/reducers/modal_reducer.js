import merge from 'lodash/merge';
import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const defaultState = {
  type: null,
  reviewId: null,
}

export default function modalReducer(oldState = defaultState, action) {
  Object.freeze(oldState);
  switch (action.type) {
    case OPEN_MODAL:
      return merge({}, oldState, { type: action.modal, reviewId: action.reviewId });
    case CLOSE_MODAL:
      return defaultState;
    default:
      return oldState;
  }
}
