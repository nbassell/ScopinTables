json.extract! review, :id, :user_id, :restaurant_id, :overall_rating, :food_rating,
                :service_rating, :ambience_rating, :value_rating, :body, :recommended

json.author review.user.full_name