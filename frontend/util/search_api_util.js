export default searchRestaurants = (query) => {
  return $.ajax({
    method: 'GET',
    url: '/api/restaurant/search',
    data: { restaurant: query }
  });
};