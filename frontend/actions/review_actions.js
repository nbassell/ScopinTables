import * as ReviewApiUtil from '../util/review_api_util';
import { closeModal } from './modal_actions';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";
export const RECEIVE_REVIEW_CONFIRMATION = "RECEIVE_REVIEW_CONFIRMATION";
export const CLEAR_REVIEW_CONFIRMATION = "CLEAR_REVIEW_CONFIRMATION";

export const createReview = review => dispatch => {
  return ReviewApiUtil.createReview(review).then(newReview => {
      dispatch(receiveReviewConfirmation());
      dispatch(closeModal());
      dispatch(receiveReview(newReview));
  }, err => {
    dispatch(receiveReviewErrors(err.responseJSON));
  });
};

export const updateReview = review => dispatch => {
  return ReviewApiUtil.updateReview(review).then(newReview => {
      dispatch(receiveReviewConfirmation());
      dispatch(closeModal());
      dispatch(receiveReview(newReview));
  }, err => {
    dispatch(receiveReviewErrors(err.responseJSON));
  });
};

export const deleteReview = id => dispatch => {
  return ReviewApiUtil.deleteReview(id).then(review => {
    dispatch(clearReviewConfirmation());
    dispatch(removeReview(review));
  });
};

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

export const receiveReviewErrors = errors => {
  return  ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
  });
};

export const clearReviewErrors = () => {
  return  ({
    type: CLEAR_REVIEW_ERRORS,
  });
};

export const receiveReviewConfirmation = () => {
  return ({
    type: RECEIVE_REVIEW_CONFIRMATION,
  });
};

export const clearReviewConfirmation = () => {
  return ({
    type: CLEAR_REVIEW_CONFIRMATION,
  });
};