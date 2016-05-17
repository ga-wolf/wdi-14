require 'pry'

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
p users["Jonathan"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers] << 7
p users["Erik"][:favorite_numbers]

# How would you add yourself to the users hash?
users["Wolf"] = {
  :twitter => "threequal",
  :favorite_numbers => [42, 1336]
}
p users

# How would you return the array of Erik's favorite numbers?
p users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
p users["Erik"][:favorite_numbers].min

# How would you return an array of Anil's favorite numbers that are also even?
anils_faves = users["Anil"][:favorite_numbers]
# p anils_faves.select { |n| n.even? }
anils_faves.select! do |num|
  num.even?
end
p anils_faves

# How would you return an array of the favorite numbers common to all users?
anils_numbers = users["Anil"][:favorite_numbers]
eriks_numbers = users["Erik"][:favorite_numbers]
jonathans_numbers = users["Jonathan"][:favorite_numbers]
# wolfs_numbers = users["Wolf"][:favorite_numbers]

p anils_numbers & jonathans_numbers & eriks_numbers

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
p (anils_numbers + jonathans_numbers + eriks_numbers).sort.uniq
