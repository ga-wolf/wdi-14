require 'pry'

# How would you return the string "Erik"?
a = ["Anil", "Erik", "Jonathan"]
p a[1]

erik_index = a.index "Erik"
p a[erik_index]

# How would you add your name to the array?
# a.push "Serge"
a << "Serge"
# a.unshift "Serge"

p a
