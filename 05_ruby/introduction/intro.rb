# my_name = "Gilberto"
# food = "Greek Lasagna"

# print "What is your name? "
# my_name = gets().chomp()
#
# print "What is your favourite food? "
# food = gets().chomp()
#
# message = "Hello, I'm #{my_name} and I like #{food}"
#
# # Puts will print to the screen and create a new line
# puts( message )
# # puts message

# Print will print to the screen, on the same line
# print( message )
# print message

# Programmer print, shows us the data type
# p( message )
# p message

# some_information = gets()
# puts some_information

# if 42 > 13
#   puts "42 is a bigger number"
# end
#
# my_name = "Roger"
# if my_name == "Roger"
#   puts "Is it really? "
# elsif my_name == "Bill"
#   puts "You're probably a genius"
# else
#   puts "Well then, it isn't Roger or Bill"
# end
#
# puts "Is it really? " if my_name == "Roger"
#
# num = 2
# if num <= 1
#   puts "Less than or equal to 1"
# end
#
# unless num > 1
#   puts "Less than or equal to 1"
# end
#
# ready_to_print = false
# if !ready_to_print
#   puts "Wait a while"
# end
#
# unless ready_to_print
#   puts "Wait a while"
# end
#
# errors = false
# if !errors
#   puts "All good"
# end
#
# unless errors
#   puts "All good"
# end
#
# puts "All good" if !errors
# puts "All good" unless errors



hour = 19
case
when hour < 12
  puts "Good Morning"
when hour > 12 && hour < 18
  puts "Good afternoon"
else
  puts "Good evening"
end

country_code = "Fr"
case country_code
  when "Au"
    puts "Australia"
  when "Fr"
    puts "France"
  when "Nz"
    puts "New Zealand"
  when "No"
    puts "Norway"
  else
    puts "Another country"
end

country_code = "Fr"
case country_code
when "Au" then puts "Australia"
when "Fr" then puts "France"
when "Nz" then puts "New Zealand"
when "No" then puts "Norway"
else
  puts "Another country"
end
