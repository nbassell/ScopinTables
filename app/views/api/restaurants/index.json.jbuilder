  @restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.extract! restaurant, :id, :name, :address, :city, :state, :description, :price
    end
  end

  # json.restaurant_ids @restaurants.map(&:id)