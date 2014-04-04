class UserSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :collection_id, :name, :screen_name, :user_guid, :profile_background_colour, :profile_background_image_url
  has_many :tweets
end
