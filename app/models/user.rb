class User < ActiveRecord::Base
  belongs_to :collection
  has_many :tweets
end
