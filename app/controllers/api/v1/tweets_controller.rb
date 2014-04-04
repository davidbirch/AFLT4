class Api::V1::TweetsController < ApplicationController
  respond_to :json # default to Active Model Serializers
  def index
    if params[:ids]
      respond_with Tweet.find(params[:ids])
    else
      respond_with Tweet.all
    end  
  end

  def show
    respond_with Tweet.find(params[:id])
  end

end
