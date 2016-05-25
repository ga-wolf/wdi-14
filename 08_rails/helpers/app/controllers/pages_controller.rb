class PagesController < ApplicationController
  def numbers
    @price = 22424.15
    @large_number = 13879817987
    @phone_number = 2125551212
  end

  def text
    @numbers = (1..50).to_a.shuffle
    @friends = 1
    @enemies = 1212
    @fairytale = "A very very very long time ago " * 15
  end

  def date
  end

  def railsassets
  end

  def url
    @single_number = 10
    @x = 500
    @y = 9
  end

  def home
  end

  def random
  end

  def single_number
  end

  def two_numbers
  end
end
