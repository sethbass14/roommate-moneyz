class OwnedPayerBillsSerializer < ActiveModel::Serializer
  attributes :id, :amount, :payer_id, :payer_name, :paid, :date_paid

  def payer_name
    object.payer.name
  end

  def payer_id
    object.payer.id
  end

end
