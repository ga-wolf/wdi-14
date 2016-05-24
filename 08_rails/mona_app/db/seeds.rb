Artist.destroy_all

Artist.create :name => "Joan Miro", :nationality => "Spanish", :dob => "1893/04/20", :period => "20th century", :image => "http://www.joan-miro.net/images/joan-miro.jpg"

Work.destroy_all

Work.create :title => "The Flight of the Dragonfly in Front of the Sun", :year => '1968', :medium => "oil on canvas", :style => "Abstract", :image => "http://www.joan-miro.net/images/paintings/the-flight-of-the-dragonfly-in-front-of-the-sun.jpg"
