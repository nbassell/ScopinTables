import * as FavoriteApiUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const receiveFavorites = ({ favorites }) => ({
  type: RECEIVE_FAVORITES,
  favorites
});

const receiveFavorite = restaurantId => ({
  type: RECEIVE_FAVORITE,
  restaurantId
});

const removeFavorite = restaurantId => ({
  type: REMOVE_FAVORITE,
  restaurantId
});

export const createFavorite = restaurantId => dispatch => {
  return FavoriteApiUtil.createFavorite(restaurantId).then(() => {
    dispatch(receiveFavorite(restaurantId));
  });
};

export const deleteFavorite = restaurantId => dispatch => {
  return FavoriteApiUtil.deleteFavorite(restaurantId).then(() => {
    dispatch(removeFavorite(restaurantId));
  });
};

export const fetchFavorites = userId => dispatch => {
  return FavoriteApiUtil.fetchFavorites(userId).then(payload => {
    dispatch(receiveFavorites(payload));
  });
};