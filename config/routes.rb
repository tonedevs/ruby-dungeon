Rails.application.routes.draw do

resources :equips

resources :users do
  resources :user_equips
  resources :items
end

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
