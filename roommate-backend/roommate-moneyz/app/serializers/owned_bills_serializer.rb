class OwnedBillsSerializer < ActiveModel::Serializer
  attributes :id
  # has_many :payer_bills, serializer: OwnedPayerBillsSerializer

end
