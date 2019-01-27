class Api::RestaurantsController < ApplicationController

  def index
    @restaurants = Restaurant.all
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    if @restaurant
      render :show
    else
      render json: ["This restaurant does not appear to exist!"], status: 404
    end
  end

  def search
    @restaurants = Restaurant.search(params[:search_term]).order(:name)
    render :index
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(
      :name, :address, :city, :state, :zipcode, :phone_number, :description,
      :price, :opening_time, :closing_time, :capacity)
  end
  
end