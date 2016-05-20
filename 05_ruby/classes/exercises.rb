require 'pry'
# Food ----> Fruit
class Food
  def consumable
    true
  end
end

f = Food.new


class Fruit < Food
  def healthy
    true
  end
end

mango = Fruit.new

# Vehicle ----> Boat
class Vehicle
  def can_move?
    true
  end
end

class Boat < Vehicle
  def move_on_water?
    true
  end
end


# ProgrammingLanguage ----> Ruby
class ProgrammingLanguage
  def is_able_to_add_one?
    true
  end
end

class Ruby < ProgrammingLanguage
  def has_elegant_syntax
    true
  end
end

# Language ----> Esperanto
class Language
  def something
    true
  end
end

class Esperanto < Language
  def is_auxiliary_language
    true
  end
end

puts ""
