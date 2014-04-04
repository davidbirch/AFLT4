class CollectionSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id
  has_many :users
  has_many :tweets
end
