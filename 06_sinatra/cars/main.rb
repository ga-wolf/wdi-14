# Require all the gems (plugins, libraries)
  # Pry for debugging
  # Sinatra to use this file as a web app
  # Sinatra/reloader to stop as having to refresh the server
require 'pry'
require 'sinatra'
require 'sinatra/reloader'

# Make a literal route, that matches any GET request to the empty path i.e. localhost:4567
get '/' do
  # "This is our home page"
  # Load the home.erb into our layout.erb file (in place of the yield)
  erb :home
end

# Make a literal route, that matches any GET request to localhost:4567/about
get '/about' do
  # "This is our about page"
  erb :about
end

# Make a literal route, that matches any GET request to localhost:4567/contact
get '/contact' do
  # "This is our contact page"
  erb :contact
end

# Make a dynamic route, that matches anything that follows the basic structure of /calc/:x/:y
  # Save x in params
  # Save y in params
get '/calc/:x/:y' do
  # No at, no play, no fun today
    # Instance variables are allowed to be accessed in views
  @first_number = params[:x].to_f
  @second_number = params[:y].to_f

  @result = @first_number + @second_number

  # Make layout.erb load result.erb in place of yield
  # Make sure that result.erb and layout.erb can access our instance variables (i.e. @result)
  erb :result
end

# Literal route that matches localhost:4567/calc
get '/calc' do
  # We load the calc.erb file into layout.erb
  # The sole purpose of this is to show a form
  erb :calc
end

# Literal route to /calculate
get '/calculate' do
  puts "\n\n" # These are just new line characters
  puts params
  puts "\n\n"

  # We expect parameters to be received from the url
  # localhost:4567/calculate?first_number=10&second_number=20
  @first_number = params[:first_number].to_f
  @second_number = params[:second_number].to_f

  # We create instance variables so we can access them in the view
  @result = @first_number + @second_number

  # Finally, we should put the result.erb page where the yield would be in the layout.erb file
  erb :result
end
