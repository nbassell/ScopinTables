json.extract! @restaurant, :id, :name, :address, :city, :state, :zipcode, :phone_number,
                           :price, :description, :opening_time, :closing_time

# json.opening_time @restaurant.opening_time.to_s.split(' ')[1]
# json.closing_time @restaurant.closing_time.to_s.split(' ')[1]