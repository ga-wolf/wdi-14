# rails generate migration create_mixtapes_songs mixtape_id:integer song_id:integer
class CreateMixtapesSongs < ActiveRecord::Migration
  def change
    # :id => false - this means no primary key!
    create_table :mixtapes_songs, :id => false do |t|
      # This table will only have foreign keys
      t.integer :mixtape_id
      t.integer :song_id
    end
  end
end
