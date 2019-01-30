export const searchRestaurants = (search_term) => {
  return $.ajax({
    method: 'GET',
    url: '/api/restaurant/search',
    data: search_term
  });
};