class Api::V1::CollectionsController < ApplicationController
  respond_to :json # default to Active Model Serializers
  def index
    respond_with Collection.all
  end

  def show
    respond_with Collection.find(params[:id])
  end
end
