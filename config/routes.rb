Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :favorites, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show] do
      resources :favorites, only: [:create]
      # delete "favorites" to: "favorites#destroy"
    end
    resources :reservations, only: [:create, :destroy]
    resources :reviews, only: [:create, :update, :destroy]
    get '/restaurants_pre_search', to: 'restaurants#pre_search'
    get '/restaurant/search', to: 'restaurants#search'
    get '/restaurant/cuisine_search', to: 'restaurants#cuisine_search'
  end

  root "static_pages#root"
end
