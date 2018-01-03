class Api::V1::HousesController < ApplicationController
  before_action :set_house, only: [:show, :update, :destroy]

  def index
    houses = House.all
    render json: houses, status: 200
  end

 def show
    render json: @house, status: 200
  end

 def create
    house = House.new(house_params)
    if house.save
      render json: house, status: 201
    else
      render json: {message: "Error with your data"}, status: 400
    end
  end

 def update
    if @house.update(house_params)
      render json: @house, status: 200
    else
      render json: {message: "Error with your data"}, status: 400
    end
  end

  def destroy
    @house.destroy
    render json: {message: "successfully destroyed", houseId: @house.id }
  end

 private
  def house_params
    params.permit(:name, :address)
  end

 def set_house
    @house = House.find(params[:id])
  end
end
