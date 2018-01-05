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
    bill = Bill.new(bill_params)
    if bill.save
      users = bill_params.payers.map {|obj| obj.payer}
      users = users.map {|userId| User.all.find(userId)}

      users.each {|user| bill.payer = user}
      
      bill_params.payers.each do |obj|
        payerBill = PayerBill.all.find do |payerbill|
          payerbill.payer.id = obj.payer
        end
        payerBill.amount = obj.amount
      end

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
    params.permit(:name, :total, :category, :due_date, :owner_id, :payers)
  end

 def set_bill
    @bill = Bill.find(params[:id])
  end
end
