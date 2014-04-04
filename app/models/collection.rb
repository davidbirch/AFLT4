class Collection < ActiveRecord::Base
  has_many :users
  has_many :tweets, :through => :users
end
