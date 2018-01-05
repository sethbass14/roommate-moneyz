class OwnedPayerBillsSerializer < ActiveModel::Serializer
  attributes :id, :amount, :payer_name, :paid, :date_paid

  def payer_name
    object.payer.name
  end

end
