require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
);

ActiveRecord::Base.logger = Logger.new(STDERR)

class User < ActiveRecord::Base
end

# READ
all_users = User.all
first_user = User.first # First user in the database
user_with_id_2 = User.find 2
user_with_id_2 = User.find_by :id => 2
user_with_name_bill = User.find_by( :first_name => "Bill" )
another_user = User.find_by( :first_name => "Bill", :last_name => "Withers" )

# CREATE
u = User.new
u.first_name = "Justin"
u.last_name = "Time"
u.username = "justintime"
u.description = "Great work"
u.save

User.create({
  :first_name => "Simon",
  :last_name => "Says",
  :username => "simonsays",
  :description => "Still great work"
})

p User.all

# UPDATE

# user = User.find_by :first_name => "Bill"
# user.last_name = "Murray"
# user.save
#
# user = User.find_by :first_name => "Bill"
# user.update :first_name => "William"

# DELETE

cedric = User.find( 5 )
cedric.destroy

# User.destroy_all




binding.pry

puts ""
