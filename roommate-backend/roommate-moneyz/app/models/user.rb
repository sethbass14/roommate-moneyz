class User < ApplicationRecord
  belongs_to :house
  has_many :payer_bills, :foreign_key => 'payer_id'
  has_many :bills, through: :payer_bills
  has_many :owned_bills, :class_name => 'Bill', :foreign_key => 'owner_id'
end
