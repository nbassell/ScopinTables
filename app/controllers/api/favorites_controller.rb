class Api::FavoritesController < ApplicationController

  before_action :require_logged_in
  
  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user = current_user

    if @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])

    if @favorite.destroy
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  private
  def favorite_params
    params.require(:favorite).permit(:user_id, :restaurant_id)
  end

end