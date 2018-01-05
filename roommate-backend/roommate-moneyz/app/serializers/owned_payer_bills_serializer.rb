class OwnedPayerBillsSerializer < ActiveModel::Serializer
  attributes :id, :amount, :payer_name

  def payer_name
    object.payer.name
  end

end
