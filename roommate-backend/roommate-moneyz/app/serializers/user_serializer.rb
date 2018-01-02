class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone
  belongs_to :house
  has_many :owned_bills
  has_many :payer_bills
end
