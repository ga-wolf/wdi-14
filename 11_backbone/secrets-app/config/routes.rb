Rails.application.routes.draw do
  root 'secrets#home'
  get '/app', :to => 'secrets#home'
  resources :secrets
end
