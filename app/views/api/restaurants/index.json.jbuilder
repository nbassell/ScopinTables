  @restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.extract! restaurant, :id, :name, :address, :city, :state, :description, :price
      if restaurant.photo.attached?
        json.photoURL url_for(restaurant.photo)
      end
    end
  end

  # json.restaurant_ids @restaurants.map(&:id)