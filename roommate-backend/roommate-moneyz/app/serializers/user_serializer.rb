class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :structureBills
  belongs_to :house
  has_many :owned_bills
  # has_many :bills
  # has_many :payer_bills

  def structureBills
    object.payer_bills.map do |payer_bill|
      {payer_bill: payer_bill, bill: payer_bill.bill }
    end
  end

end
