require 'pry'

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# How would you return the string "One"?
p h[1]

# How would you return the string "Two"?
p h[:two]

# How would you return the number 2?
p h["two"]

# How would you add {3 => "Three"} to the hash?
h[3] = "Three"
p h

# How would you add {:four => 4} to the hash?
h[:four] = 4
p h
