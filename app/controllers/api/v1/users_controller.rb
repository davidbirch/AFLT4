class Api::V1::UsersController < ApplicationController
  respond_to :json # default to Active Model Serializers
  def index
    respond_with User.all
  end

  def show
    respond_with User.find(params[:id])
  end
end
