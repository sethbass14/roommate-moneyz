class Bill < ApplicationRecord
  belongs_to :owner, :class_name => 'User'
  has_many :payer_bills
  has_many :payers, :class_name => 'User', through: :payer_bills

  validates :name, presence: true
  validates :total, presence: true, numericality: {greater_than: 0.00}
  validates :category, presence: true
  validates :due_date, presence: true

end
