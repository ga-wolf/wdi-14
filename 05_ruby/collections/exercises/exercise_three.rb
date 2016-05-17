require 'pry'
is = {true => "It's true!", false => "It's false"}

# What is the return value of is[2 + 2 == 4]?
# is[2 + 2 == 4]
# is[4 == 4]
# is[true]
p is[true]

# What is the return value of is["Erik" == "Jonathan"]?
# is["Erik" == "Jonathan"]
# is[false]
p is[false]

# What is the return value of is[9 > 10]?
# is[9 > 10]
# is[false]
p is[false]

# What is the return value of is[0]?
p is[0] # => nil
is.default = "Something else"
p is[0] # => "Something else"

# What is the return value of is["Erik"]?
p is[0] # => "Something else"
