# var hello = function (name) {
#
# }

def hello
  puts "Hi"
end

# hello
# hello()

def hello( name )
  puts "Hello #{name}"
end

# hello("Roger")

def hello( name = "World" )
  puts "Hello #{name}"
end

# hello()
# hello("Roger")

def hello( name = "World", end_punctuation = "!" )
  puts "Hello #{name}#{end_punctuation}"
end

hello()
hello( "Jane", "." )
hello( "Bill", "!!!!" )
hello( "me", "?" )
