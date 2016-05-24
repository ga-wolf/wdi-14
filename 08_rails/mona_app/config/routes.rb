Rails.application.routes.draw do

  get '/artists' => 'artists#index'

  get '/artists/new' => 'artists#new'
  post '/artists' => 'artists#create'

  get '/artists/:id' => 'artists#show'

end
