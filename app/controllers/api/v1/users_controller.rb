class Api::V1::UsersController < ApplicationController
  respond_to :json # default to Active Model Serializers
  def index
    if params[:ids]
      respond_with User.find(params[:ids])
    else
      respond_with User.all
    end  
  end

  def show
    respond_with User.find(params[:id])
  end
end
