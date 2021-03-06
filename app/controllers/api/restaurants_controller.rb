class Api::RestaurantsController < ApplicationController

  def index
    @restaurants = Restaurant.with_attached_photo
  end

  def show
    @restaurant = Restaurant
    .with_attached_photo
    .find(params[:id])
    if @restaurant
      render :show
    else
      render json: ["This restaurant does not appear to exist!"], status: 404
    end
  end

  def pre_search
    @restaurants = Restaurant.pre_search
    render json: @restaurants
  end

  def search
    @restaurants = Restaurant
      .with_attached_photo
      .search(params[:search_term])
      .order(:name)
    unless @restaurants.empty?
      render :index
    else
      render json: ["No matching restaurants found"], status: 404
    end
  end

  def cuisine_search
    @restaurants = Restaurant
    .where(cuisine: params[:cuisine].titleize)
    unless @restaurants.empty?
      render :index
    else
      render json: ["No restaurants found"], status: 404
    end
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(
      :name, :address, :city, :state, :zipcode, :phone_number, :description,
      :price, :opening_time, :closing_time, :capacity, :photo, :cuisine)
  end
  
end