import * as APIUtil from '../util/restaurant_api_util';
import * as SearchUtil from '../util/search_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_RESTAURANT_ERRORS = 'RECEIVE_RESTAURANT_ERRORS';

export const receiveRestaurant = restaurant => {
  return ({
    type: RECEIVE_RESTAURANT,
    restaurant,
    // reviews
  });
};

export const receiveRestaurants = restaurants => {
  return ({
    type: RECEIVE_RESTAURANTS,
    restaurants
  });
};

export const receiveRestaurantErrors = errors => {
  return ({
    type:RECEIVE_RESTAURANT_ERRORS,
    errors
  });
};

export const fetchRestaurants = () => dispatch => {
  return APIUtil.fetchRestaurants().then(
    payload => dispatch(receiveRestaurants(payload)));
};

export const fetchRestaurant = (id) => dispatch => {
  return APIUtil.fetchRestaurant(id).then(
    restaurant => {
      dispatch(receiveRestaurant(restaurant))
    }, err => {
      dispatch(receiveRestaurantErrors(err.responseJSON));
    });
};

export const searchRestaurants = (query) => dispatch => {
  return SearchUtil.searchRestaurants(query).then(
    payload => {
      dispatch(receiveRestaurants(payload));
    }
  );
};

export const preSearch = () => dispatch => {
  return SearchUtil.preSearch().then(
    payload => {
      dispatch(receiveRestaurants(payload));
    }
  );
};