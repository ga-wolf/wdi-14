User.destroy_all # no duplicates!
u1 = User.create :email => 'craigsy@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true
u2 = User.create :email => 'jonesy@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true
puts "User count: #{User.all.count}"

Song.destroy_all
s1 = Song.create :name => 'All by electricity'
s2 = Song.create :name => 'Marianas Trench'
s3 = Song.create :name => 'Have a safe trip, dear'
puts "Song count: #{Song.all.count}"

Album.destroy_all
a1 = Album.create :name => 'Engine takes to the water'
a2 = Album.create :name => 'From the vapor to the gasoline'
a3 = Album.create :name => 'Systems/Layers'

puts "Album count: #{Album.all.count}"

# song belongs_to an album, an album has_many songs
a1.songs << s1
# .songs method is defined by has_many :songs in album.rb
  # When we use that method, it tries to find all songs with the particular album's id stored in the album_id column
  # It will always return an array
a2.songs << s2
a3.songs << s3
# When we use the append operator (<<), it will change the album_id on a song to have the id of whichever album was specified
  # Then it will save those changes

puts "Song count on first album: #{a1.songs.count}"
puts "Song count on second album: #{a2.songs.count}"
puts "Song count on third album: #{a3.songs.count}"

puts "Album name for first song: #{s1.album.name}"
puts "Album name for second song: #{s2.album.name}"
puts "Album name for third song: #{s3.album.name}"

Genre.destroy_all
g1 = Genre.create :name => 'Nautical Text Rock'
g2 = Genre.create :name => 'Math rock'
g3 = Genre.create :name => 'Chamber pop'
puts "Genre count: #{Genre.all.count}"

g1.songs << s1 << s2
g2.songs << s2 # This creates a new record in the genres_songs table, that will contain the id of the second genre and the id of the second song
g3.songs << s3

puts "Genre one song count: #{g1.songs.count}"
puts "Genre two song count: #{g2.songs.count}"
puts "Genre three song count: #{g3.songs.count}"

puts "Song one genre count: #{s1.genres.count}"
puts "Song two genre count: #{s2.genres.count}"
puts "Song three genre count: #{s3.genres.count}"

Artist.destroy_all
r1 = Artist.create :name => 'June of 44'
r2 = Artist.create :name => 'The Mercury Program'
r3 = Artist.create :name => 'Rachels'
puts "Artist count: #{Artist.all.count}"

# Artist.first.songs - defined by has_many :songs (relies on the fact that on songs, we have an artist_id)
# Song.first.artist - defined by belongs_to :artist

r1.songs << s1 # This will change the artist_id column on the first song, and then save it - this makes the association
r2.songs << s2
r3.songs << s3

puts "First artist song count: #{r1.songs.count}"
puts "Second artist song count: #{r2.songs.count}"
puts "Third artist song count: #{r3.songs.count}"

puts "Name of the artist that wrote song one: #{s1.artist.name}"
puts "Name of the artist that wrote song two: #{s2.artist.name}"
puts "Name of the artist that wrote song three: #{s3.artist.name}"

Mixtape.destroy_all
m1 = Mixtape.create :title => 'Fire'
m2 = Mixtape.create :title => 'Easter tunes'
m3 = Mixtape.create :title => 'Code jams'
puts "Mixtape count: #{Mixtape.all.count}"

u1.mixtapes << m1
u2.mixtapes << m2 << m3

puts "User one mixtape count: #{u1.mixtapes.count}"
puts "User two mixtape count: #{u2.mixtapes.count}"

puts "User of first mixtape: #{m1.user.email}"
puts "User of second mixtape: #{m2.user.email}"
puts "User of third mixtape: #{m3.user.email}"

# These will all create records in the mixtapes_songs table (it will keep track of the mixtape_id and the song_id)
m1.songs << s1 << s2 << s3
m2.songs << s2 << s3
m3.songs << s1

puts "First mixtape song count: #{m1.songs.count}"
puts "Second mixtape song count: #{m2.songs.count}"
puts "Third mixtape song count: #{m3.songs.count}"

puts "First song mixtape count: #{s1.mixtapes.count}"
puts "Second song mixtape count: #{s2.mixtapes.count}"
puts "Third song mixtape count: #{s3.mixtapes.count}"
