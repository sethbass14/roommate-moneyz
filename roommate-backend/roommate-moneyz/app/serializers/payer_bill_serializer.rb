class PayerBillSerializer < ActiveModel::Serializer
  attributes :id, :amount
  belongs_to :bill
end
