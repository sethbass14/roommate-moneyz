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
      @payer_bill = PayerBill.new(bill_id: bill.id, payer_id: params[:payer_id])
      @payer_bill.save
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
    params.permit(:name, :total, :category, :due_date, :owner_id)
  end

 def set_bill
    @bill = Bill.find(params[:id])
  end
end
