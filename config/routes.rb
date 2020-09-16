Rails.application.routes.draw do

  resources :user_equips
  resources :equips
  resources :items
  post 'auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  get '/user_equips/:user_equip_id/equips/:id', to: 'equips#add_equip_to_inventory'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
