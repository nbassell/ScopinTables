Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show] do
      resources :reviews, only: [:create]
    end
    resources :reservations, only: [:create, :destroy]
    resources :reviews, only: [:edit, :destroy]
    resources :favorites, only: [:create, :destroy]
    get '/restaurants_pre_search', to: 'restaurants#pre_search'
    get '/restaurant/search', to: 'restaurants#search'
  end

  root "static_pages#root"
end
