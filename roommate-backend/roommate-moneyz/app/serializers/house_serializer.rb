class HouseSerializer < ActiveModel::Serializer
  attributes :id, :name, :address
  has_many :users
  has_many :owned_bills
end
