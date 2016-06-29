require 'pry'

matches = "The number 42...".match /number (\d+)/

puts matches.pre_match
puts matches.string
puts matches[0]
puts "The actual number: #{matches[1]}"
puts matches.post_match

puts "\n\nNAMED CAPTURES\n\n"
# Named captures - (?<name>\d)
matches = "The number 42...".match /number (?<meaning>\d+)/

puts matches.pre_match
puts matches.string
puts matches[0]
puts "The actual number: #{matches[:meaning]}"
puts matches.post_match

group_of_numbers = "123 456 789"
m = group_of_numbers.match( /\d+/ )
puts m[0]

m = group_of_numbers.scan /\d+/
p m

p "(555)-212-5319".sub /\D/, ""
p "(555)-212-5319".gsub /\D/, ""
p "(555)-212-5319".split /\D/

puts "\n\nANCHORS\n\n"

p "  ruby  ".match /ruby/
p "  ruby  ".match /^ruby/
p "ruby    ".match /^ruby/
p "  ruby  ".match /ruby$/
p "    ruby".match /ruby$/

puts "\n\nFLAGS\n\n"

p "RUBY".match /ruby/i
matches = "555-212-5319".match(/
  (\d+)- # This will match 555, which is the area_code
  (\d+)- # This will match 212, which is the exchange_code
  (\d+)  # This will match 5319, which is the suffix_code
/x)
p matches

matches = "555-212-5319".match(/
  (?<area>\d+)- # This will match 555
  (?<exchange>\d+)- # This will match 212
  (?<suffix>\d+)  # This will match 5319
/x)
p matches

puts "\n\nGREEDY vs. RELUCTANT\n\n"

# GREEDY
greedy_matches = "205-222-3219".match(/
  (\d+).*
  (\d+).*
  (\d+)
/x)
p greedy_matches

# RELUCTANT
reluctant_matches = "205-222-3219".match(/
  (\d+).*?
  (\d+).*?
  (\d+)
/x)
p reluctant_matches

html = "<div><h1>Hello World</h1></div>"

# GREEDY
matches = html.match(/<(.*)>/)
p matches

# RELUCTANT
matches = html.match(/<(.*?)>/)
p matches
