json.extract! reservation, :id, :user_id, :restaurant_id, :table_size, :start_datetime
json.parsed_datetime reservation.parsed_start_datetime