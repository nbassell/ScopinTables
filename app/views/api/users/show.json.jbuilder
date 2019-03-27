json.user do
  json.partial! "api/users/user", user: @user
end

json.reservations do
  @user.reservations.each do |reservation|
    json.set! reservation.id do
      json.partial! "api/reservations/reservation", reservation: reservation
    end
  end

  # json.reservation_ids @user.reservations.order(:start_datetime).map(&:id)
end

json.reviews do
  @user.reviews.each do |review|
    json.set! review.id do
      json.partial! "api/reviews/review", review: review
    end
  end

  # json.review_ids @user.reviews.map(&:id)
end

json.favorites @user.favorites.map(&:restaurant_id)