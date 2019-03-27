import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const RECEIVE_DETAILED_USER = 'RECEIVE_DETAILED_USER';

export const receiveCurrentUser = ({ user, favorites }) => ({
  type: RECEIVE_CURRENT_USER,
  user,
  favorites
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = errors => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};

export const clearSessionErrors = () => {
  return ({
    type: CLEAR_SESSION_ERRORS,
  });
};

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(() => (
    dispatch(logoutCurrentUser())
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
);

export const receiveDetailedUser = ({ user, restaurants, reservations, reviews, favorites }) => {
  return ({
    type: RECEIVE_DETAILED_USER,
    user,
    restaurants,
    reservations,
    reviews,
    favorites
  });
};

// export const fetchUserProfile = id => dispatch => {
//   dispatch(loadingProfile());
//   return SessionAPIUtil.fetchUserProfile(id).then(payload => {
//     dispatch(receiveDetailedUser(payload));
//   });
// };