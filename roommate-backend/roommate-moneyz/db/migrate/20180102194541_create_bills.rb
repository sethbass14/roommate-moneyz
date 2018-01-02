class CreateBills < ActiveRecord::Migration[5.1]
  def change
    create_table :bills do |t|
      t.string :name
      t.float :total
      t.string :category
      t.date :due_date
      t.integer :owner_id
      t.timestamps
    end
  end
end
