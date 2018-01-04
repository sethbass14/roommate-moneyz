class OwnedBillsSerializer < ActiveModel::Serializer
  attributes :id, :total, :category, :due_date, :name

  has_many :payer_bills, serializer: OwnedPayerBillsSerializer
end
