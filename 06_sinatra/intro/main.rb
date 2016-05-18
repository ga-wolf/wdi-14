require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  # "Hello World"
  erb :home
end

get '/hello' do
  # "Hi there"
  erb :home
end

get '/hello/frank' do
  # "Hello Frank"
  erb :home
end

get '/hello/heath' do
  "Hello Heath"
end

get '/hello/temple' do
  "Hello Temple"
end

get '/hello/:name' do
  # Puts, print, p will all end up in the server log
  puts "Matched /hello/:name"
  puts "Stored #{params[:name]}"

  # Ruby creates a params hash that contains any details that we care about
  name_from_url = params[:name]

  # Because this is the last thing, it will be sent to the browser
  "Hello #{ name_from_url.capitalize }"
end

get '/:color' do
  puts params
  # "The color chosen was: #{params[:color]}"

  erb :show_color
end

get '/users/:username' do
  # "This should be the profile of #{params[:username]}"

  erb( :user_profile )
end

get '/users/:username/delete' do
  "This should <b style='color: gainsboro'>delete</b> #{params[:username]}"

  # html = ""
  # html << "<h1>Hello</h1>"
  # html << "<p>We are deleting you</p>"
  # html << "Haha"
  # html
end
