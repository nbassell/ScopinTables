json.set! :restaurants do
  @restaurantts.each do |restaurant|
    json.set! restaurant.id do
      json.extract! restaurant, :name, :price, :description
      res_array = []
      
    end
  end
end

