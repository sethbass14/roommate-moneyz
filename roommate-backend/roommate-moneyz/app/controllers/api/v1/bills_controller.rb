class Api::V1::BillsController < ApplicationController
  before_action :set_bill, only: [:show, :update, :destroy]

  def index
    bills = Bill.all
    render json: bills, status: 200
  end

 def show
    render json: @bill, status: 200
  end

 def create

    bill = Bill.new(bill_params["bill"])
    if bill.save
      payers = bill_params["payers"]

      userIds = payers.map {|obj| obj["payer"]}
      users = userIds.map {|userId| User.all.find(userId)}

      users.each do |user| 
        bill.payers << user
        current = bill.payer_bills.last

        # grab associated amount and set it to curent instance of payerbill
        amount = 0
        payers.each do |obj| 
          if obj["payer"] == user.id
            amount = obj["amount"]
          end
          amount
        end
        # byebug
        # how do we save value from params
        # byebug

        current.amount = amount.to_f
        current.save
      end

      # update payerBill with amount

      # bill.payers.each do |payerbill|

      # end
      # payers.each do |obj|
      #   payerBill = PayerBill.all.find do |payerbill|
      #     payerbill.payer_id = obj["payer"][0] && payerbill.bill_id = bill.id
      #   end
      #   payerBill.amount = obj["amount"][0].to_f
      #   payerBill.save
      # end

      render json: bill, status: 201
    else
      render json: {message: "Error with your data"}, status: 400
    end
  end

 def update

    if @bill.update(bill_params)
      render json: @bill, status: 200
    else
      render json: {message: "Error with your data"}, status: 400
    end
  end

  def destroy
    @bill.destroy
    render json: {message: "successfully destroyed", billId: @bill.id }
  end

 private
  def bill_params
    params.permit(bill: [:name, :total, :category, :due_date, :owner_id], payers: [:amount, :payer])
  end

 def set_bill
    @bill = Bill.find(params[:id])
  end
end
