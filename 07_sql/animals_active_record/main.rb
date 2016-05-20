# Require all of our gems, making sure to get the sqlite3 gem (which allows Ruby to talk to the sqlite3 database on your computer)
require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

# Connect to the database.db using sqlite3
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
);

# Makes sure that ActiveRecord prints out the errors and the SQL that actually runs - not necessary but good for debugging
ActiveRecord::Base.logger = Logger.new(STDERR)

# We make our class that will automatically be connected to a database table, to make the connection, Active Record will lowercase and pluralise the name of the class
class Animal < ActiveRecord::Base
  belongs_to :habitat
end

# a = Animal.first
# a.habitat

class Habitat < ActiveRecord::Base
  has_many :animals
end

# h = Habitat.first
# h.animals

get '/' do
  erb :home
end

get '/habitats' do
  binding.pry
  @all_habitats = Habitat.all
  erb :habitats_index
end

get '/animals' do
  # Use the connection that Active Record has created to get all of the animals out of the database
  @all_animals = Animal.all
  erb :animals_index
end

get '/habitats/new' do
  erb :habitats_new
end

get '/animals/new' do
  erb :animals_new
end

post '/habitats' do
  habitat = Habitat.new
  habitat.landscape = params["landscape"]
  habitat.climate = params["climate"]
  habitat.save

  redirect "/habitats"
end

post '/animals' do
  # We create a new instance of the class Animal
  animal = Animal.new
  # Assign all the values to be the same things that came from the form
  animal.species = params["species"]
  animal.image = params["image"]
  animal.description = params["description"]
  # We actually save this animal to the database
  animal.save

  # We redirect the animals index to show all of the animals
  redirect "/animals"
end

get '/habitats/:id/delete' do
  # We find the right habitat using the ID from the URL, and then we destroy it
  habitat = Habitat.find( params[:id] )
  habitat.destroy
  redirect "/habitats"
end

get '/animals/:id/delete' do
  # We find the right animal using the ID from the URL, and then we destroy it
  animal = Animal.find( params[:id] )
  animal.destroy
  redirect "/animals"
end

get '/habitats/:id/edit' do
  @habitat = Habitat.find( params[:id] )
  erb :habitats_edit
end

get '/animals/:id/edit' do
  # We find the right animal using the ID from the URL
  # We make an instance variable to make sure that we can prefill the form's inputs
  @animal = Animal.find( params[:id] )

  # Then we load views/animals_edit.erb into the yield statement
  erb :animals_edit
end

post '/habitats/:id' do
  habitat = Habitat.find params[:id]
  habitat.landscape = params["landscape"]
  habitat.climate = params["climate"]
  habitat.save

  redirect "/habitats/#{params[:id]}"
end

post "/animals/:id" do
  # We find the right animal
  animal = Animal.find( params[:id] )
  # Update all of the attributes
  animal.species = params["species"]
  animal.image = params["image"]
  animal.description = params["description"]
  animal.habitat_id = params["habitat_id"]
  # Save the changes
  animal.save

  # So we redirect to the show page for the animal in question
  redirect "/animals/#{params[:id]}"
end

get '/habitats/:id' do
  @habitat = Habitat.find params[:id]
  erb :habitats_show
end

get '/animals/:id' do
  # Find the right animal using the ID from the URL
  @animal = Animal.find params[:id]

  # We should be able to access @animal in here
  erb :animals_show
end
