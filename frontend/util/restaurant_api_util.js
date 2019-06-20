
export const fetchRestaurant = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/restaurants/${id}`
  });
};

export const fetchRestaurants = () => {
  return $.ajax({
    method: "GET",
    url: "/api/restaurants"
  });
};

export const searchRestaurants = (query) => {
  return $.ajax({
    method: "GET",
    url: "/api/restaurants",
    data: query
  });
};