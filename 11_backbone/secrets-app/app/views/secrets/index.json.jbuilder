json.array!(@secrets) do |secret|
  json.extract! secret, :id, :content, :created_at, :updated_at
  json.url secret_url(secret, format: :json)
  # Associations go here
end
