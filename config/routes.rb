Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show] do
      resources :reservations, only: [:create]
      resources :reviews, only: [:create]
    end
    resources :reservations, only: [:show, :edit, :destroy]
    resources :reviews, only: [:edit, :destroy]
    resources :favorites, only: [:create, :destroy]
  end

  root "static_pages#root"
end
