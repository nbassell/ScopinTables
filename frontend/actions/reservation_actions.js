import * as ReservationApiUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";
export const CLEAR_RESERVATION_ERRORS = "CLEAR_RESERVATION_ERRORS";
export const RECEIVE_RESERVATION_CONFIRMATION = "RECEIVE_RESERVATION_CONFIRMATION";
export const CLEAR_RESERVATION_CONFIRMATION = "CLEAR_RESERVATION_CONFIRMATION";

export const createReservation = reservation => dispatch => {
  return ReservationApiUtil.createReservation(reservation).then(newRes => {
    dispatch(receiveReservationConfirmation());
    dispatch(receiveReservation(newRes));
  }, err => {
    dispatch(receiveReservationErrors(err.responseJSON));
  });
};

export const deleteReservation = id => dispatch => {
  return ReservationApiUtil.deleteReservation(id).then(res => {
    dispatch(removeReservation(res));
  });
};

export const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});

export const removeReservation = reservation => ({
  type: REMOVE_RESERVATION,
  reservation
});

export const receiveReservationErrors = errors => {
  return ({
    type: RECEIVE_RESERVATION_ERRORS,
    errors
  });
};

export const clearReservationErrors = () => {
  return ({
    type: CLEAR_RESERVATION_ERRORS
  });
};

export const receiveReservationConfirmation = () => {
  return ({
    type: RECEIVE_RESERVATION_CONFIRMATION,
  });
};

export const clearReservationConfirmation = () => {
  return ({
    type: CLEAR_RESERVATION_CONFIRMATION,
  });
};