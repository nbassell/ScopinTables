json.partial! "api/users/user", user: @user

#json.reservations do
#  @user.reservations.each do |reservation|
#    json.set! reservation.id do
#      json.partial! "api/reservations/reservation", reservation: reservation
#    end
#  end
#
#  # json.reservation_ids @user.reservations.order(:start_datetime).map(&:id)
#end
#
#json.reviews do
#  @user.reviews.each do |review|
#    json.set! review.id do
#      json.partial! "api/reviews/review", review: review
#    end
#  end
#
#  # json.review_ids @user.reviews.map(&:id)
#end

# tracks show jbuilder notefloat
# need to extract all restaurant info that will be displayed on index
# json.restaurants @user.favorites.map(&:restaurantId)

#@user.favorited_restaurants.each do |restaurant|
#  json.set! restaurant.id do
#    json.extract! restaurant, :id, :name, :address, :city, :state, :description, :price, :cuisine
#    if restaurant.photo.attached?
#      json.photoURL url_for(restaurant.photo)
#    end
#  end
#end