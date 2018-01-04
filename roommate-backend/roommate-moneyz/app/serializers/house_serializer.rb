class HouseSerializer < ActiveModel::Serializer
  attributes :id, :name, :address

  has_many :users, serializer: HouseUsersSerializer

end
