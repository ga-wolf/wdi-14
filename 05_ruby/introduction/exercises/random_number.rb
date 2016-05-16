# Activity:
#
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.

print "What is the maximum number? "
max_number = gets().to_i

random_number = Random.rand 0..max_number

print "What is your guess? "
user_guess = gets().to_i

# while random_number != user_guess
until random_number == user_guess
  if user_guess > random_number
    puts "A little lower..."
  else
    puts "A little higher..."
  end

  print "What is your new guess? "
  user_guess = gets().to_i
end

puts "Congratulations, you got it right!"
