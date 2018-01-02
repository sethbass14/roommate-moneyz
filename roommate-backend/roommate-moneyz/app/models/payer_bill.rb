class PayerBill < ApplicationRecord
  belongs_to :bill
  belongs_to :payer, :class_name => 'User'
end
