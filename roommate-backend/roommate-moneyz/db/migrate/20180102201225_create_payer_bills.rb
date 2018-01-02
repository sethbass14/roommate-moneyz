class CreatePayerBills < ActiveRecord::Migration[5.1]
  def change
    create_table :payer_bills do |t|
      t.integer :bill_id
      t.integer :payer_id
      t.float :amount

      t.timestamps
    end
  end
end
