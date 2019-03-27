import * as FavoriteApiUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const createFavorite = restaurantId => dispatch => {
  return FavoriteApiUtil.createFavorite(restaurantId).then(favorite => {
    dispatch(receiveFavorite(favorite));
  });
};

export const deleteFavorite = restaurantId => dispatch => {
  return FavoriteApiUtil.deleteFavorite(restaurantId).then(favorite => {
    dispatch(removeFavorite(favorite));
  });
};

export const fetchFavorites = userId => dispatch => {
  return FavoriteApiUtil.fetchFavorites(userId).then(payload => {
    dispatch(receiveFavorites(payload));
  });
};

export const receiveFavorites = ({ favorites }) => ({
  type: RECEIVE_FAVORITES,
  favorites
});

export const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
});

export const removeFavorite = favorite => ({
  type: REMOVE_FAVORITE,
  favorite
});
