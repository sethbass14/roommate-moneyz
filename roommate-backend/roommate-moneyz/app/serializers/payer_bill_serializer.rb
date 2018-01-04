class PayerBillSerializer < ActiveModel::Serializer
  attributes :id, :amount, :paid
  belongs_to :bill
end
