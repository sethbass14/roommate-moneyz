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
    bill = Bill.create(bill_params)
    render json: bill, status: 201
  end

 def update
    @bill.update(bill_params)
    render json: @bill, status: 200
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
