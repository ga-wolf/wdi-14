require 'pry'

class MarxBrother
  attr_accessor( :first_name, :last_name, :vice, :best_performance )

  def initialize( first_name, last_name = "Marx", vice = "Being terrific", best_performance = "Duck Soup" )
    @first_name = first_name
    @last_name = last_name
    @vice = vice
    @best_performance = best_performance
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

  # attr_reader JUST GETTERS
  # attr_writer JUST SETTERS
  # attr_accessor BOTH GETTERS AND SETTERS

  def identify
    "I am #{@first_name} #{@last_name}, I was great in #{@best_performance}. I love #{@vice}"
  end

  def self.generic_marx_brother_method
    "OOooooh"
  end

  def act
    "Amazing"
  end
end

g = MarxBrother.new "Groucho", "Marx", "Cigars", "The Three Stooges"
# m.first_name=( "Groucho" )
# m.last_name=( "Marx" )
# m.best_performance=( "The Three Stooges" )
# m.vice=( "Cigars" )
p g.identify

# binding.pry

zeppo = MarxBrother.new "Zeppo", "Marx", "Guitars", "Duck Soup"
# zeppo.first_name = "Zeppo"
# zeppo.last_name = "Marx"
# zeppo.best_performance = "Duck Soup"
# zeppo.vice = "Guitars"
p zeppo.identify


class Dog
  attr_accessor :breed, :name, :fur_colour

  def initialize( breed, name, fur_colour )
    @breed = breed
    @name = name
    @fur_colour = fur_colour
  end
end

# tammy = Dog.new
# tammy.breed = "Tamaskan"
# tammy.name = "Tammy"
# tammy.fur_colour = "Black"

buddy = Dog.new "Labrador", "Buddy", "Golden"
# buddy.breed = "Labrador"
# buddy.name = "Buddy"
# buddy.fur_colour = "Golden"






binding.pry

puts ""
