require 'pry'

brothers = []
brothers = ["Groucho", "Harpo", "Chico"]

movies = ["Satantango", "Toy Story 3", "Jaws", "Shrek"]

# Use the constructor
empty_array = Array.new               # []
three_nils = Array.new( 3 )           # [nil, nil, nil]
three_booleans = Array.new( 3, true ) # [true, true, true]

tic_tac_toe_board = Array.new( 3 ) { Array.new( 3 ) }

alphabet = ("A".."Z").to_a # Get a range back, turn it into an array

first_letter = alphabet[0]
first_letter = alphabet.first

last_letter = alphabet[-1]
last_letter = alphabet.last

first_three_letters = alphabet[0..2]
first_three_letters = alphabet.take( 3 )

arr_of_numbers = [1, 2, 3, 4, 5]
arr_of_numbers.push( 6 )
arr_of_numbers << 7
arr_of_numbers << 8
arr_of_numbers << 9 << 10

arr_of_numbers.unshift( 0 ) # Put 0 at the beginning
arr_of_numbers.unshift( -0 )

arr_of_numbers.insert( 3, "Serge" )
arr_of_numbers.insert( 4, "didn't", "marry", "Jane" )

arr_of_numbers.delete_at( 3 )
arr_of_numbers.delete_at( 3 )
arr_of_numbers.delete_at( 3 )
arr_of_numbers.delete_at( 3 )

arr_of_numbers.shift() # Removes the first element

arr = [11, 2124, 11, 124124, 11, 2, 0.2]
arr.uniq # This doesn't change the variable arr!
arr.uniq! # This is destructive, it will change the variable arr

# p alphabet

alphabet.each do |letter|
  # print "This just ran for the letter #{letter}"
end

another_array_of_numbers = [1, 2, 3, 4, 5]

another_array_of_numbers.each do |current_number|
  # print current_number
end

another_array_of_numbers.each { |num| }

another_array_of_numbers.reverse_each do |num|
  # print num
end

another_array_of_numbers.reverse_each { |n|  }
# puts ""
for number in another_array_of_numbers
  # print number
end

a_bunch_of_words = ["Pebble", "Rebecca", "Granite", "Gainsboro"]

a_bunch_of_words.map! do |word|
  word.upcase
end

arr_of_words = ["a", "the", "gobbledygook", "rebeccapurple"]

arr_of_words.select! do |word|
  word.length > 3
end

arr_of_numbers = [1, 2, 3, 4, 5, 6]

arr_of_numbers.select! do |num|
  num.even?
end


binding.pry
puts ""
