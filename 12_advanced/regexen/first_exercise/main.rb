require 'pry'

# ruby main.rb flintstones.txt
# ARGF is a special variable given to Ruby files that stores arguments - in this case the flintstones.txt file
ARGF.each do |line|
  puts line
end
