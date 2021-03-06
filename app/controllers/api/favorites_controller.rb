class Api::FavoritesController < ApplicationController

  before_action :require_logged_in

  def create
    @favorite = Favorite.new(user: current_user, restaurant_id: params[:restaurant_id])

    if @favorite.save
      render json: ["saved!"], status: 200
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find_by(restaurant_id: params[:restaurant_id], user_id: current_user.id)

    if @favorite && @favorite.destroy
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

end