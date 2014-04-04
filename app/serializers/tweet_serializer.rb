class TweetSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :user_id, :collection_id, :tweet_text, :tweet_created_at, :tweet_guid, :tweet_source
end
