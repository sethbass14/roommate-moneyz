class PayerBillSerializer < ActiveModel::Serializer
  attributes :id, :amount, :paid, :date_paid
  belongs_to :bill
end
