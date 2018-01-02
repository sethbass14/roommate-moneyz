class Bill < ApplicationRecord
  belongs_to :owner, :class_name => 'User'
  has_many :payer_bills
  has_many :payers, :class_name => 'User', through: :payer_bills
end
