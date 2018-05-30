@notes.each do |note|
  json.set! note.id do
    json.extract! note, :id, :notebook_id, :title, :body, :updated_at, :created_at, :shortcut


    json.images note.embeds do |embed|
      json.id embed.id
      json.imageUrl embed.image
      json.index_location embed.index_location
    end

  end
end
