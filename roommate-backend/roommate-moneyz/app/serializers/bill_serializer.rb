class BillSerializer < ActiveModel::Serializer
  attributes :id, :name, :total, :category, :due_date
  belongs_to :owner
  
end
