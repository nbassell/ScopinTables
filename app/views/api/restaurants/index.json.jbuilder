json.restaurants do
  @restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.extract! restaurant, :name, price, description
    end
  end
end