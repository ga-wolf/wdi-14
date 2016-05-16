# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.

print "How old are you? "
user_age = gets().to_f
# p age # p( age )

if user_age < 18
  puts "An appropriate message, given #{ user_age }"
else
  puts "You're over 18, given #{ user_age }"
end
