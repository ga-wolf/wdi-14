json.array!(@movies) do |movie|
  json.extract! movie, :id, :title, :director, :plot
  json.url movie_url(movie, format: :json)
end
