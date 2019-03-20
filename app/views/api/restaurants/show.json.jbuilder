json.restaurant do
json.partial! 'api/restaurants/restaurant', restaurant: @restaurant
  json.extract! @restaurant, :id, :name, :address, :city, :state, :zipcode,
                           :price, :description, :opening_time, :closing_time, :cuisine
  json.phone_number @restaurant.parsed_phone_number
  json.food_rating @restaurant.food_rating
  json.service_rating @restaurant.service_rating
  json.ambience_rating @restaurant.ambience_rating
  json.value_rating @restaurant.value_rating
end

json.reviews do
  json.review_ids @restaurant.reviews.map(&:id)
  @restaurant.reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end
end


# json.opening_time @restaurant.opening_time.to_s.split(' ')[1]
# json.closing_time @restaurant.closing_time.to_s.split(' ')[1]