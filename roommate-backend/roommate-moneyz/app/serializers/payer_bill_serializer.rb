class PayerBillSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :bill
end
