class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone
  belongs_to :house
  has_many :owned_bills, serializer: OwnedBillsSerializer
  has_many :payer_bills
  #
  # def structureBills
  #   object.payer_bills.map do |payer_bill|
  #     {payer_bill: payer_bill, bill: payer_bill.bill, owner: payer_bill.bill.owner }
  #   end
  # end

end
