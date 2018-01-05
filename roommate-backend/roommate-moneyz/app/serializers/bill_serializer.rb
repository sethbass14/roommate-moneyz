class BillSerializer < ActiveModel::Serializer
  attributes :id, :name, :total, :category, :due_date, :owner_id, :owner_name
  has_many :payer_bills, serializer: OwnedPayerBillsSerializer
  def owner_name
    object.owner.name
  end

end
