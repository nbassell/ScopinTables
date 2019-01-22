Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :edit]
    resource :session, only: [:create, :destroy, :show]
    resources :favorites, only: [:create, :destroy]
  end

  root "static_pages#root"
end
