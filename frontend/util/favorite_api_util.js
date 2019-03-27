export const createFavorite = favorite => {
  return $.ajax({
    method: 'POST',
    url: '/api/restaurants/',
  });
};

export const deleteFavorite = favoriteId => {
  return $.ajax ({
    method: 'DELETE',
    url: '/api/favorites'
  });
};