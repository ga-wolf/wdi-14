# Require all of our gems, making sure to get the sqlite3 gem (which allows Ruby to talk to the sqlite3 database on your computer)
require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# We respond to a GET request to an empty path
get '/' do
  # We load the home.erb file in place of any yield statement in the layout.erb
  erb :home
end

# If there is a GET request to /animals
get '/animals' do
  # Connect to the SQLite3 database (using the gem)
  db = SQLite3::Database.new "database.db"
  # Make sure that the results come back as a hash rather than an array
  db.results_as_hash = true

  # Run some SQL and save the result of selecting all attributes from all records in the animal database, save that in an instance variable (the @) so that we can use that in the view
  @all_animals = db.execute "SELECT * FROM animals;"

  erb :animals_index
end

get '/animals/new' do
  # This should just show a form
  erb :animals_new
end

post '/animals' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  # Can you please create a new record in the database using the information that came from the form (based around the name attributes on the inputs)
  animal = db.execute "INSERT INTO animals (species, image, description) VALUES ('#{params[:species]}', '#{params[:image]}', '#{params[:description]}');"

  # We redirect the animals index to show all of the animals
  redirect "/animals"
end

get '/animals/:id/delete' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  # Perform some SQL and delete a record from the database using the ID that came from the URL
  db.execute "DELETE FROM animals WHERE id == #{params[:id]};"

  # Show all of the animals again
  redirect "/animals"
end

get '/animals/:id/edit' do
  # Uses a route to show the form
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  # Access the database so we can provide default values in the form
  @animal = db.execute( "SELECT * FROM animals WHERE id == #{params[:id]};" )[0]

  # Then we load views/animals_edit.erb into the yield statement
  erb :animals_edit
end

post "/animals/:id" do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  # We update all of the animals with a set of values
  # But only really the ones with a certain ID (the ID that came from the URL)
    # All params except the id came from the form (based around the name attribute on the inputs)

  sql = "UPDATE animals SET species='#{params[:species]}', image = '#{params[:image]}', description = '#{params[:description]}' WHERE id == #{params[:id]};"

  puts "\n\n\n"
  puts sql
  puts "\n\n\n"

  db.execute sql
  # puts sql

  # db.execute "UPDATE animals SET species='#{params[:species]}', image = '#{params[:image]}', description = '#{params[:description]}' WHERE id == #{params[:id]};"

  # So we redirect to the show page for the animal in question
  redirect "/animals/6"
end

get '/animals/:id' do
  # We connect to the database
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  # Access a particular animal from the database
  # The results of a SELECT query will always come back as an array, but we only care about the first result
  @animal = db.execute( "SELECT * FROM animals WHERE id == #{params[:id]};" )[0]

  # We should be able to access @animal in here
  erb :animals_show
end
