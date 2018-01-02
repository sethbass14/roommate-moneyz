class House < ApplicationRecord
  has_many :users
  has_many :bills, through: :owners, :class_name => 'User'

end
