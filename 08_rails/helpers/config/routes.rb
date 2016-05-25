Rails.application.routes.draw do
  root 'pages#home'

  get '/random' => 'pages#random', :as => 'random'
  get '/number/:number' => 'pages#single_number', :as => 'single_number'
  get '/numbers/:x/:y' => 'pages#two_numbers', :as => 'two_numbers'

  get '/date' => 'pages#date', :as => 'date'

  get '/numbers' => 'pages#numbers', :as => 'numbers'

  get '/text' => 'pages#text', :as => 'text'

  get '/railsassets' => 'pages#railsassets', :as => 'assets'

  get '/url' => 'pages#url', :as => 'url'

  get '/home' => 'pages#home', :as => 'home'
end
