class BillSerializer < ActiveModel::Serializer
  attributes :id, :name, :total, :category, :due_date, :owner_id, :owner_name

  def owner_name
    object.owner.name
  end

end
