class Api::ReviewsController < ApplicationController
  before_action :require_login
  before_action :ensure_user_authorization, only: [:update, :destroy]
  
  def create
    @review = Review.new(review_params)
    @review.user = current_user

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])

    if @review.destroy
      render :show
    else
      render json: @review.errors.full_messages, status: 422    
    end
  end
  
  
  private
  def review_params
    params.require(:review).permit(:restaurant_id, :overall_rating, :food_rating,
      :service rating, :ambience_rating, :value_rating, :body, :recommended)
  end

  def ensure_user_authorization
    review = Review.find_by(id: params[:id])
    unless current_user == review.user
      render json: ["Only review creator may do that"], status: 403
    end
  end
end