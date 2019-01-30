export const searchRestaurants = (search_term) => {
  return $.ajax({
    method: 'GET',
    url: '/api/restaurant/search',
    data: search_term
  });
};

export const preSearch = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/restaurants_pre_search',
  });
};