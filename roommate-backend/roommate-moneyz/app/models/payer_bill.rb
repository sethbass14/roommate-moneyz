class PayerBill < ApplicationRecord
  belongs_to :bill
  belongs_to :payer, :class_name => 'User'

  
  validates :amount, numericality: {greater_than: 0.00}, presence: true
end
