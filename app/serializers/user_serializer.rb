class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :screen_name, :user_guid, :profile_background_colour, :profile_background_image_url
end
