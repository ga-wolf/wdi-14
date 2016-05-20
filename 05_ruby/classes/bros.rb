require 'pry'

class Human
  def speak message
    puts message
  end

  def breathe
    "Breathe in, breathe out"
  end

  def eat food
    "Currently consuming #{food}, mmmmm"
  end
end

anonymous = Human.new

class MarxBrother < Human
  # This will create our getters and setters for us
  attr_accessor :first_name, :last_name, :vice, :best_performance

  # This method will run every time we create a new instance of the MarxBrother class
    # It only requires one parameter, as it provides defaults for the rest
  def initialize( first_name, last_name = "Marx", vice = "Being terrific", best_performance = "Duck Soup" )
    # We set instance variables so that we can access it later on (in methods, or on instances)
    @first_name = first_name
    @last_name = last_name
    @vice = vice
    @best_performance = best_performance
  end
end

groucho = MarxBrother.new "Groucho"
zeppo = MarxBrother.new "Zeppo"
gummo = MarxBrother.new "Gummo"
harpo = MarxBrother.new "Harpo"
chico = MarxBrother.new "Chico"

binding.pry

puts ""
