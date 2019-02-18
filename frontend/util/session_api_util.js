export const login = user => {
  delete user.passwordConfirmation;
  delete user.f_name;  
  delete user.l_name;
  delete user.primary_dining_location;
  return $.ajax({
      method: 'POST',
      url: '/api/session',
      data: { user }
  });
};

export const signup = user => {
  delete user.passwordConfirmation;
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  });
};

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const fetchUserProfile = id => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });
};