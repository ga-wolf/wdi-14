require 'pry'

# We create a method called menu that prints out a bunch of information. This means we can call it lots of times
def menu
  puts "(a) - addition" # Makes a new line
  puts "(q) - quitting" # Makes a new line
  print "Enter your choice: " # Will allow the user to type next to it
  gets.chomp() # Ask the user for an input, and we implictly return that
end

user_choice = menu() # Store whatever was typed as the user_choice variable

# Create an add method
def add
  # Ask for some inputs, after some text
  # Turn those inputs into a float, and save it in some variable
  print "What is your first number? "
  first_number = gets.to_f

  print "What is your second number? "
  second_number = gets.to_f

  # binding.pry

  # Add the two inputs given together and save the result
  result = first_number + second_number

  # Print these things out to the screen
  puts "The result is #{result}"
end

# Until the current value of the user_choice variable is equal to the string q, keep running this series of code
until user_choice == "q"

  # I compare a bunch of stuff with the variable user_choice
  case user_choice
  # In the case that user_choice was "a", call the add method
  when "a" then add()
  # Otherwise, print out an offensive method
  else
    puts "Invalid selection, dingus."
  end

  # Store the new user_choice using the implicit return from the menu method
    # If the new user_choice is "q", this loop won't run again
  user_choice = menu()
end

# This will only run after our loop has stopped
puts "Thanks for using our lovely calculator! Send $ and \u2764"
