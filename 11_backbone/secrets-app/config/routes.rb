Rails.application.routes.draw do
  root 'secrets#home'
  resources :secrets
end
