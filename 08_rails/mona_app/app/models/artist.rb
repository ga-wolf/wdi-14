class Artist < ActiveRecord::Base
  has_many :works
  # artist.works
end
