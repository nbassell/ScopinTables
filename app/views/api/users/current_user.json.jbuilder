json.user do
  json.partial! "api/users/user", user: @user
end

json.favorites @user.favorites.map(&:restaurant_id)