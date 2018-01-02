class House < ApplicationRecord
  has_many :users
  has_many :owners, :class_name => 'User'
  # has_many :payers, :class_name => 'User'
  has_many :owned_bills, through: :owners, :foreign_key => :owner_id

end
