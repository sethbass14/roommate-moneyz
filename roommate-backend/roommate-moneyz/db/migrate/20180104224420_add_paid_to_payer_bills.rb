class AddPaidToPayerBills < ActiveRecord::Migration[5.1]
  def change
    add_column :payer_bills, :paid, :boolean, default: false
  end
end
