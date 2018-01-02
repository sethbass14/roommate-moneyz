class BillSerializer < ActiveModel::Serializer
  attributes :id, :name, :total, :category, :due_date, :owner_id
  belongs_to :owner
  has_many :payers
end
