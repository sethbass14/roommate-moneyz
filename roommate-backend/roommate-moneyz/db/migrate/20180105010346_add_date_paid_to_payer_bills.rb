class AddDatePaidToPayerBills < ActiveRecord::Migration[5.1]
  def change
    add_column :payer_bills, :date_paid, :date
  end
end
