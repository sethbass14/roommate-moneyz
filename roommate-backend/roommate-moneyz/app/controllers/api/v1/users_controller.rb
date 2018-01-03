class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    users = User.all
    render json: users, status: 200
  end

 def show
    render json: @user, status: 200
  end

 def create
    user = User.new(user_params)
    if user.save
      render json: user, status: 201
    else
        render json: {message: "Error with your data"}, status: 400
    end
  end

 def update
    if @user.update(user_params)
      render json: @user, status: 200
    else
      render json: {message: "Error with your data"}, status: 400
    end
  end

  def destroy
    @user.destroy
    render json: {message: "successfully destroyed", userId: @user.id }
  end

  def delete_payer_bill
    @payer_bill = PayerBill.where(payer_id: params[:payer_id], bill_id: params[:bill_id])[0]
    PayerBill.destroy(@payer_bill.id)
    render json: {message: "successfully destroyed", payerBillId: @payer_bill.id }
  end

 private
  def user_params
    params.permit(:name, :phone, :house_id)
  end

 def set_user
    @user = User.find(params[:id])
  end

end
