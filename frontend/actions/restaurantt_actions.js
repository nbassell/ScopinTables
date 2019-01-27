import * as APIUtil from '../util/restaurant_api_util';
import SearchUtil from '../util/search_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const receiveRestaurant = ({ restaurant, reviews }) => {
  return ({
    type: RECEIVE_RESTAURANT,
    restaurant,
    reviews
  });
};

export const receiveRestaurants = restaurants => {
  return ({
    type: RECEIVE_RESTAURANTS,
    restaurants
  });
};

export const fetchRestaurants = () => dispatch => {
    return APIUtil.fetchRestaurants().then(
      payload => dispatch(receiveRestaurants(payload)));
  };
};

export const fetchRestaurant = (id) => dispatch => {
    return APIUtil.fetchRestaurant(id).then(
      restaurant => dispatch(receiveRestaurant(restaurant))
    );
  };
};

export const searchRestaurants = (query) => dispatch => {
    return SearchUtil.searchRestaurants(query).then(
      payload => {
        dispatch(receiveRestaurants(payload));
      }
    );
  };
};