class Api::ReservationsController < ApplicationController

  before_action :require_logged_in
  before_action :ensure_user_authorization, only: :destroy

  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user = current_user

    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])

    if @reservation.destroy
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  private
  def reservation_params
    params.require(:reservation).permit(:start_datetime, :table_size, :restaurant_id)
  end

  def ensure_user_authorization
    reservation = Reservation.find(params[:id])
    unless current_user == reservation.user
      render json: ["Only reservation creator may cancel"], status: 403
    end
  end
  
  
end